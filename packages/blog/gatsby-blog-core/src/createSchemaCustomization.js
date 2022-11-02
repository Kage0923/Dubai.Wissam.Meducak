const withDefaults = require('./utils/default.options')
const types = require('./types')

module.exports = async ({ actions, schema }, pluginOptions) => {
  const { createTypes } = actions
  pluginOptions = withDefaults(pluginOptions)

  const imageNodeTypes = []
  pluginOptions.sources.forEach(({ imageNodeType }) => {
    imageNodeType && imageNodeTypes.push(imageNodeType)
  })

  const allTypeDefs = [
    /**
     * Schema Interfaces
     *
     * For a semantic schema we define an interface for file and
     * api sources of data
     */
    types.interfaces,
    /**
     * Image Asset Type
     *
     * Union type for image assets from file or api locations
     */
    schema.buildUnionType({
      name: 'ImageAsset',
      types: imageNodeTypes,
      resolveType: node => node.internal && node.internal.type
    })
  ]

  createTypes(allTypeDefs)
}
