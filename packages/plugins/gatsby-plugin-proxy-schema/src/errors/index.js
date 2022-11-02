module.exports = vars => ({
  missing_composer_options: `Could not find necessary values in pluginOptions for core-composer`,
  missing_source: `Could not find ${vars.source.name} sourcing plugin. \n\rPlease refer to theme documentation to properly install ${vars.source.sourcePlugin} plugin or disable ${vars.source.name} from theme options.`,
  unused_source: `Detected unused sourcing plugin for: ${vars.source.name}. \n\rIf you're intending to use ${vars.source.name}, please enable it in theme options otherwise uninstall ${vars.source.sourcePlugin} plugin to avoid type conflicts.`,
  missing_localpath: `Missing ${vars.source.sourceInstanceName} from localPaths in pluginOptions`,
  deprecated_source_plugin: `Deprecated sourcing plugin detected: ${vars.installedPlugin.name}@${vars.installedPlugin.version} - Minimum required version is ${vars.installedPlugin.name}@${vars.source.sourcePluginUpgradeDocs}. Please upgrade the sourcing plugin. See: ${vars.source.sourcePluginVersionGuide}`
})
