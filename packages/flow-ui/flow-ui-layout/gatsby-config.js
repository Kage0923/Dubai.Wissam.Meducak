module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@layout': '@elegantstack/flow-ui-layout/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
