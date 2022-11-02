module.exports = pluginOptions => ({
  sources: pluginOptions.sources || [],
  basePath: pluginOptions.basePath || '/',
  localPaths: pluginOptions.localPaths || [],
  pageContext: pluginOptions.pageContext || null
})
