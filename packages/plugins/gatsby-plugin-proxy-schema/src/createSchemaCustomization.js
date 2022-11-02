const glob = require('glob')
const nodePath = require('path')
const { parse } = require('gatsby/graphql')
const withDefaults = require('./utils/default.options')
const throwError = require('./errors')

const PROXY_NODES_CACHE_KEY = 'PROXY_NODES_DEFS'

module.exports = async ({ actions, store, cache, reporter }, pluginOptions) => {
  const { createTypes } = actions
  const { sources, localPaths } = withDefaults(pluginOptions)
  const { program, flattenedPlugins } = store.getState()
  const allTypeDefs = []

  if (sources.length < 1 || localPaths.length < 1)
    reporter.warn(throwError().missing_composer_options)

  /**
   * Parse graphql doc and determines which types need
   * proxy nodes and saves mapping in cache. onCreateNode will use the mapping
   * in cache to create the proxy nodes.
   *
   * Uses proxyOf type directive
   * Example:
   * type ContentfulArticleProxy implements Node @proxyOf(type: "ContentfulArticle")
   */
  let proxyNodesCache = {}

  const extractProxyDefs = async (typeDoc, options = {}) => {
    //Check for proxy nodes
    let hasProxyNodes = false
    const proxyNodes = {}
    const typeDefsFromAST = parse(typeDoc)

    typeDefsFromAST.definitions.forEach(def => {
      if (def.kind !== 'ObjectTypeDefinition' || def.directives.length < 1)
        return

      const typeName = def.name.value
      def.directives.forEach(directive => {
        if (directive.name.value === 'proxyOf') {
          hasProxyNodes = true

          const typeArgument = directive.arguments.find(
            arg => arg.name.value == 'type'
          )
          const parentTypeName =
            typeArgument && typeArgument.value && typeArgument.value.value

          proxyNodes[parentTypeName] = {
            proxyType: typeName,
            ...options
          }
        }
      })
    })

    //Save proxy node mapping
    if (hasProxyNodes) {
      proxyNodesCache = {
        ...proxyNodesCache,
        ...proxyNodes
      }
    }
  }

  /**
   * Add External Source Types
   *
   * Fallback: If disabled, add fallback types to avoid build fails due to
   * missing contentful types during query extraction from components
   */
  const addRemoteSourceTypes = async source => {
    const {
      typeDefs,
      typeDefsFallback,
      enabled,
      sourcePlugin,
      sourcePluginVersion
    } = source

    const installedPlugin =
      sourcePlugin &&
      flattenedPlugins.find(plugin => plugin.name == sourcePlugin)

    if (enabled) {
      if (installedPlugin) {
        //Check if installed plugin has the minimum required version
        if (
          sourcePluginVersion &&
          installedPlugin.version.localeCompare(
            sourcePluginVersion,
            undefined,
            {
              numeric: true,
              sensitivity: 'base'
            }
          ) === -1
        ) {
          reporter.panic(
            throwError({ source, installedPlugin }).deprecated_source_plugin
          )
        }
        await extractProxyDefs(typeDefs)
        allTypeDefs.push(typeDefs)
      } else {
        reporter.panic(throwError({ source }).missing_source)
      }
    } else {
      if (installedPlugin) {
        reporter.panic(throwError({ source }).unused_source)
      } else {
        typeDefsFallback && allTypeDefs.push(typeDefsFallback)
      }
    }
  }

  const addLocalSourceTypes = async source => {
    const { typeDefs, enabled, extensions, sourceInstanceName } = source

    if (!enabled) return

    const localPath = localPaths.find(path => path.name === sourceInstanceName)

    if (!localPath) {
      reporter.panic(throwError({ source }).missing_localpath)
    }

    const { path, name } = localPath

    const files = glob.sync(
      `${nodePath.resolve(program.directory, path)}/**/*{${
        extensions && extensions.join(',')
      }}`
    )
    // Create types only if local files exist
    if (files.length >= 1) {
      await extractProxyDefs(typeDefs, {
        sourceInstanceName: name
      })
      allTypeDefs.push(typeDefs)
    }
  }

  //Add sources from pluginOptions

  sources.forEach(async source => {
    // File System Source
    if (source.sourceInstanceName) {
      await addLocalSourceTypes(source)
    } else {
      //Remote Source
      await addRemoteSourceTypes(source)
    }
  })

  //Save proxy node mapping in cache
  //TODO: Use another method to pass proxy mapping to onCreateNode
  const currentCache = await cache.get(PROXY_NODES_CACHE_KEY)

  await cache.set(PROXY_NODES_CACHE_KEY, {
    ...currentCache,
    ...proxyNodesCache
  })

  createTypes(allTypeDefs)
}
