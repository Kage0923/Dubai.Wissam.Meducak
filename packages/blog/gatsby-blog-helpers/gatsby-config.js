module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@helpers-blog': '@elegantstack/gatsby-blog-helpers/src'
        },
        extensions: ['js', 'jsx']
      }
    }
  ]
}
