const urljoin = require('url-join')
const slugify = require('slugify')
const toMarkdown = require('@sanity/block-content-to-markdown')
const normalizeSlug = require('../utils/normalizeSlug')
const withDefaults = require('../utils/default.options')

/**
 * Slug Maker
 *
 * Returns the pre-defined slug or generates a slug from name
 * or title field of the node
 */

const makeSlug =
  (options = {}, fieldConfig) =>
  async (source, args, context, info) => {
    const resolver = fieldConfig.resolve || context.defaultFieldResolver
    const fieldValue = await resolver(source, args, context, info)

    const fromValue =
      (fieldValue &&
        (fieldValue.slug || fieldValue.name || fieldValue.title)) ||
      (source &&
        (source[info.fieldName] || source.slug || source.name || source.title))

    if (!fromValue) return null

    const plugin = await context.nodeModel.findOne({
      query: {
        filter: {
          name: { eq: '@elegantstack/gatsby-plugin-utility-directives' }
        }
      },
      type: 'SitePlugin'
    })

    const { basePath, sitePaths, slugSanitizeRegex } = withDefaults(
      plugin.pluginOptions
    )
    const pathPrefix = (sitePaths && sitePaths[source.internal.type]) || ''

    return normalizeSlug(
      urljoin(
        basePath,
        pathPrefix,
        slugify(fromValue, {
          lower: true,
          remove: slugSanitizeRegex
        })
      )
    )
  }

/**
 * Normalize Social Links
 *
 * Returns object matching defined SocialMedia Type
 */

const normalizeSocial =
  (options = {}, fieldConfig) =>
  async (source, args, context, info) => {
    const resolver = fieldConfig.resolve || context.defaultFieldResolver
    const fieldValue = await resolver(source, args, context, info)
    if (fieldValue == null || fieldValue.length < 1) return null

    return fieldValue.map(social => ({
      name: social.name || null,
      url: social.url || social
    }))
  }

/**
 * Block Content to Markdown
 *
 * Converts Sanity Block Content to Markdown
 */

const blockContentToMarkdown =
  (options = {}, fieldConfig) =>
  async (source, args, context, info) => {
    const resolver = fieldConfig.resolve || context.defaultFieldResolver
    const fieldValue = await resolver(source, args, context, info)
    if (fieldValue == null) return null

    // Get gatsby-source-sanity options
    const plugin = context.nodeModel
      .getAllNodes({ type: 'SitePlugin' })
      .find(node => node.name === 'gatsby-source-sanity')

    const { projectId, dataset } = plugin.pluginOptions

    return {
      ...source,
      rawBody: toMarkdown(fieldValue, {
        projectId,
        dataset
      })
    }
  }

module.exports = {
  makeSlug,
  normalizeSocial,
  blockContentToMarkdown
}
