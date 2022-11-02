const {
  makeSlug,
  normalizeSocial,
  blockContentToMarkdown
} = require('./schema/extensions')

module.exports = async ({ actions, store }) => {
  const { createFieldExtension } = actions
  const { schemaCustomization } = store.getState()
  const { fieldExtensions } = schemaCustomization

  if (!fieldExtensions[makeSlug.name]) {
    createFieldExtension(makeSlug)
  }
  if (!fieldExtensions[normalizeSocial.name]) {
    createFieldExtension(normalizeSocial)
  }
  if (!fieldExtensions[blockContentToMarkdown.name]) {
    createFieldExtension(blockContentToMarkdown)
  }
}
