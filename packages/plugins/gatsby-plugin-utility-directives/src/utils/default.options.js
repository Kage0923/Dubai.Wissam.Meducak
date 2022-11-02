module.exports = pluginOptions => ({
  basePath: pluginOptions.basePath || '/',
  sitePaths: pluginOptions.sitePaths || null,
  slugSanitizeRegex: pluginOptions.slugSanitizeRegex || /[^\w\s.{}\/\-]+/g
})
