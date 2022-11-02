import castArray from './castArray'

//Builds theme-ui variant dynamically
export default (a, b, c) => {
  //Responsive variant is passed
  //Add variant child(b) to variant only
  if (Array.isArray(a)) {
    return a.map(variant => [variant, b].join('.'))
  }

  //Variant group is passed
  return castArray(b).map(variant => {
    let values = [a, variant]

    if (c) {
      values.push(c)
    }

    return values.join('.')
  })
}
