const fs = require('fs')
const path = require('path')

//Read file instead of require to take advantage of graphql syntax highlighting
module.exports = {
  interfaces: fs.readFileSync(path.join(__dirname, 'interfaces.gql'), 'utf8'),
  file: fs.readFileSync(path.join(__dirname, 'file.gql'), 'utf8'),
  sanity: fs.readFileSync(path.join(__dirname, 'sanity.gql'), 'utf8'),
  sanityFallback: fs.readFileSync(
    path.join(__dirname, 'sanity.fallback.gql'),
    'utf8'
  ),
  contentful: fs.readFileSync(path.join(__dirname, 'contentful.gql'), 'utf8'),
  contentfulFallback: fs.readFileSync(
    path.join(__dirname, 'contentful.fallback.gql'),
    'utf8'
  ),
  strapi: fs.readFileSync(path.join(__dirname, 'strapi.gql'), 'utf8')
}
