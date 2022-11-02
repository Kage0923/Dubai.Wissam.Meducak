const withDefaults = require('./utils/default.options')

module.exports = ({ actions }, pluginOptions) => {
  const { alias, extensions } = withDefaults(pluginOptions)

  actions.setWebpackConfig({
    resolve: {
      alias,
      extensions
    }
  })
}
