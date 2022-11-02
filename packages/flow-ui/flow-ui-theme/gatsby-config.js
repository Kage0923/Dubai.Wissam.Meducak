const defaultFonts = require('./src/theme/typography-fonts.json')

module.exports = options => {
  return {
    plugins: [
      `gatsby-plugin-emotion`,
      //Add preconnect to google fonts servers for performance
      {
        resolve: 'gatsby-plugin-preconnect',
        options: {
          domains: [
            'https://fonts.gstatic.com/',
            'https://fonts.googleapis.com/'
          ]
        }
      },
      {
        resolve: `gatsby-plugin-web-font-loader`,
        options: {
          ...((options && options.fonts) ||
            (defaultFonts && defaultFonts.fonts))
        }
      }
    ]
  }
}
