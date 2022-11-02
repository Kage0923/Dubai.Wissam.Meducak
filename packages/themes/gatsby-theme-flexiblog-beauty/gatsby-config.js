const overrideFonts = require('./src/@elegantstack/flow-ui-theme/theme/typography-fonts.json')

module.exports = options => {
  options = {
    ...options,
    fonts: options.fonts || overrideFonts.fonts
  }

  return {
    plugins: [
      {
        resolve: '@elegantstack/gatsby-blog-core',
        options
      },
      {
        resolve: '@elegantstack/gatsby-blog-pages',
        options
      },
      {
        resolve: '@elegantstack/gatsby-blog-helpers',
        options
      },
      {
        resolve: '@elegantstack/gatsby-common-helpers',
        options
      },
      {
        resolve: '@elegantstack/flow-ui-components',
        options
      },
      {
        resolve: '@elegantstack/flow-ui-theme',
        options
      },
      {
        resolve: '@elegantstack/flow-ui-layout',
        options
      },
      {
        resolve: '@elegantstack/flow-ui-widgets',
        options
      }
    ]
  }
}
