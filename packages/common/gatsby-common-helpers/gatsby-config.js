module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@helpers': '@elegantstack/gatsby-common-helpers/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
