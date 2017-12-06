export default find

/**
 * This method will iterate over elements of an array, returning the first element
 * that the given predicate returns truthy for.
 * Similar to _.find in LoDash https://lodash.com/docs/4.17.4#find
 *
 * @param {Array} array - Input array of objects
 * @param {Function} predicate - A function that iterates over the elements in `array`
 * @return {Object} - First element that matches the predicate
 */

function find(array, predicate) {
  if (!(array instanceof Array)) {
    return undefined
  }

  let foundElement

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      foundElement = array[i]
      return foundElement
    }
  }

  return undefined
}
