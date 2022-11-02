import dedupe from 'dedupe'

export default (array, { limit, skip, distinct }) => {
  if (!array) return null

  if (!limit && !skip && !distinct) return array

  let newArray = array

  //Remove duplicate array
  if (distinct) {
    newArray = dedupe(newArray, node => node.id)
  }

  // Skip specified number of first elements
  if (skip) {
    newArray = newArray.slice(skip)
  }

  //Limit total number of array
  if (limit) {
    newArray = newArray.slice(0, limit)
  }

  return newArray
}
