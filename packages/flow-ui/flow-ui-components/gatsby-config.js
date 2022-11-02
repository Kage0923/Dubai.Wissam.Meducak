module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': '@elegantstack/flow-ui-components/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
