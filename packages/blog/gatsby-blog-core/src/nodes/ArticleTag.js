module.exports = (
  { node, actions, getNode, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions
  const { localPaths } = pluginOptions
  const { type } = node.internal

  const ARTICLE_TYPES = [
    'Mdx',
    'ContentfulArticle',
    'SanityArticle',
    'STRAPI_ARTICLE'
  ]
  const newNodeType = 'ArticleTag'

  if (ARTICLE_TYPES.includes(type)) {
    if (type === 'Mdx') {
      const fileNode = getNode(node.parent)
      const source = fileNode && fileNode.sourceInstanceName
      if (!localPaths.find(path => path.name === source)) return
    }

    const { tags, tags_array } = node.frontmatter || node

    const tagsToCreate = tags_array || tags || []

    // Create nodes
    tagsToCreate.forEach(tag => {
      const id = createNodeId(`${tag} >>> ${newNodeType}`)

      // Skip existing node
      if (getNode(id)) return

      const newNode = {
        id,
        name: tag,
        parent: node.id,
        internal: {
          type: newNodeType
        }
      }
      newNode.internal.contentDigest = createContentDigest(newNode)

      createNode(newNode)
    })
  }
}
