/**
 * Node Reducer
 *
 * Reduces a node object to value of a field
 */

const reduce = (options = {}, fieldConfig) => async (
  source,
  args,
  context,
  info
) => {
  const resolver = fieldConfig.resolve || context.defaultFieldResolver
  const fieldValue = await resolver(source, args, context, info)
  if (fieldValue == null) return null

  const result = await context.defaultFieldResolver(fieldValue, args, context, {
    ...info,
    from: options.to
  })

  return result
}

/**
 * Proxies field to a field in another node
 *
 * Defaults to field with the same name in parent if
 * options.from is not set
 */

const proxyField = (options = {}, fieldConfig) => async (
  source,
  args,
  context,
  info
) => {
  let fromField = 'parent'
  let toField = info.fieldName

  if (options.from) {
    const fromFields = options.from.split('.')
    fromField = fromFields[0]
    toField = fromFields.slice(1)
  }

  const resolver = fieldConfig.resolve || context.defaultFieldResolver
  const fieldValue = await resolver(source, args, context, {
    ...info,
    from: fromField
  })
  if (fieldValue == null) return null

  const targetNode = context.nodeModel.getNodeById({
    id: fieldValue
  })

  const result = await context.defaultFieldResolver(targetNode, args, context, {
    ...info,
    from: toField
  })

  return result
}

const proxyResolver = (options = {}, fieldConfig) => async (
  source,
  args,
  context,
  info
) => {
  const resolver = fieldConfig.resolve || context.defaultFieldResolver
  const fieldValue = await resolver(source, args, context, info)
  if (fieldValue == null) return null

  const { on, to } = options
  const { schema, fieldName } = info
  const gqlField = schema.getType(on).getFields()[to || fieldName]
  const result = await gqlField.resolve(fieldValue, args, context, info)

  return result
}

module.exports = {
  reduce,
  proxyField,
  proxyResolver
}
