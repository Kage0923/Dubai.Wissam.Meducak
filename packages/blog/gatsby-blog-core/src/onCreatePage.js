const withDefaults = require('./utils/default.options')
const queryMobileMenu = require('./utils/queryMobileMenu')

module.exports = async ({ graphql, page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions
  const { pageContextOptions } = withDefaults(pluginOptions)

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  deletePage(page)

  // Pass services auto-created pages
  createPage({
    ...page,
    context: {
      ...page.context,
      ...pageContextOptions
    }
  })
}
