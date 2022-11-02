const withDefaults = require('./src/utils/default.options')

module.exports = options => {
  options = withDefaults(options)

  const isLocalSourceEnabled = options.sources.find(
    source => source.sourceInstanceName && source.enabled
  )
  const mdxSource = options.sources.find(source => source.name == 'mdx')
  const mdxExtensions = mdxSource && mdxSource.extensions

  const plugins = [
    {
      resolve: '@elegantstack/gatsby-plugin-proxy-directives',
      options
    },
    {
      resolve: '@elegantstack/gatsby-plugin-proxy-schema',
      options
    },
    {
      resolve: '@elegantstack/gatsby-plugin-utility-directives',
      options
    },
    {
      resolve: '@elegantstack/gatsby-plugin-mkdir',
      options
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: mdxExtensions,
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: options.imageQuality,
              showCaptions: true,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true
            }
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800
            }
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
          ...options.gatsbyRemarkPlugins
        ],
        remarkPlugins: [require('remark-slug'), ...options.remarkPlugins]
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false
      }
    }
  ].filter(Boolean)

  // Resolve local paths
  if (isLocalSourceEnabled) {
    plugins.push('gatsby-transformer-json')
    options.localPaths.forEach(localPath =>
      plugins.push({
        resolve: 'gatsby-source-filesystem',
        options: localPath
      })
    )
  }

  // Resolve static paths (ie. assets)
  options.staticPaths.forEach(localPath =>
    plugins.push({
      resolve: 'gatsby-source-filesystem',
      options: localPath
    })
  )

  return {
    plugins
  }
}
