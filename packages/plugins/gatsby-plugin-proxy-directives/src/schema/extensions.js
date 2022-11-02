const { proxyField, proxyResolver, reduce } = require('./resolvers')

module.exports = {
  proxyField: {
    name: 'proxyField',
    description: 'Proxy field value to a field in another node.',
    args: {
      from: 'String'
    },
    extend: (options, fieldConfig) => ({
      resolve: proxyField(options, fieldConfig)
    })
  },

  proxyResolver: {
    name: 'proxyResolver',
    description: 'Resolve field using a resolver from another type.',
    args: {
      on: 'String!',
      to: 'String'
    },
    extend: (options, fieldConfig) => ({
      resolve: proxyResolver(options, fieldConfig)
    })
  },

  reduce: {
    name: 'reduce',
    description: 'Reduces field value from object.',
    args: {
      to: 'String!'
    },
    extend: (args, fieldConfig) => ({
      resolve: reduce(args, fieldConfig)
    })
  }
}
