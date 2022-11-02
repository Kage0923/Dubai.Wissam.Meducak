const withDefaults = require('./utils/default.options')
const nodeCreators = require('./nodes')

module.exports = async (helpers, pluginOptions) => {
  pluginOptions = withDefaults(pluginOptions)

  await nodeCreators.map(
    async nodeCreator => await nodeCreator(helpers, pluginOptions)
  )
}
