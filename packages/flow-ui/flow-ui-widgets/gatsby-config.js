module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@widgets': '@elegantstack/flow-ui-widgets/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
