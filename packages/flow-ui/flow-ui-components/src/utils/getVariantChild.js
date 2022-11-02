export default (variants, part) =>
  variants.map(variant => [variant, part].join('.'))
