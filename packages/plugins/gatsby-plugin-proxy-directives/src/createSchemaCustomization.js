const { reduce, proxyField, proxyResolver } = require('./schema/extensions')

module.exports = async ({ actions, store }) => {
  const { createFieldExtension } = actions
  const { schemaCustomization } = store.getState()
  const { fieldExtensions } = schemaCustomization

  if (!fieldExtensions[reduce.name]) {
    createFieldExtension(reduce)
  }
  if (!fieldExtensions[proxyField.name]) {
    createFieldExtension(proxyField)
  }
  if (!fieldExtensions[proxyResolver.name]) {
    createFieldExtension(proxyResolver)
  }
}
