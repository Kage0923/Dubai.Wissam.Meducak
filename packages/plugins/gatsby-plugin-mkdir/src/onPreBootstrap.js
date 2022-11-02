const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const withDefaults = require('./utils/default.options')

// Ensure that content directories exist at site-level
module.exports = ({ store }, pluginOptions) => {
  const { program } = store.getState()
  const { localPaths } = withDefaults(pluginOptions)

  localPaths.forEach(localPath => {
    const dir = path.join(program.directory, localPath.path)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}
