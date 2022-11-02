const withDefaults = require('./utils/default.options')

const PROXY_NODES_CACHE_KEY = 'PROXY_NODES_DEFS'

module.exports = async (helpers, pluginOptions) => {
  const {
    node,
    actions,
    getNode,
    createNodeId,
    createContentDigest,
    cache
  } = helpers
  const { createNode, createParentChildLink } = actions
  pluginOptions = withDefaults(pluginOptions)

  const createNodeProxy = async proxyNodes => {
    const { type } = node.internal

    if (proxyNodes[type]) {
      const { proxyType, sourceInstanceName } = proxyNodes[type]

      if (sourceInstanceName) {
        const fileNode = getNode(node.parent)
        const source = fileNode && fileNode.sourceInstanceName
        if (source !== sourceInstanceName) return
      }

      const newNode = {
        id: createNodeId(`${node.id} >>> ${proxyType}`),
        parent: node.id,
        internal: {
          type: proxyType
        }
      }
      newNode.internal.contentDigest = createContentDigest(newNode)

      createNode(newNode)
      createParentChildLink({ parent: node, child: newNode })
    }
  }

  const proxyNodes = await cache.get(PROXY_NODES_CACHE_KEY)
  await createNodeProxy(proxyNodes)
}
