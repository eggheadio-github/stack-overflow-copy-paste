export default contains

/**
 * Original Source: https://stackoverflow.com/questions/237104
 *
 * Checks if a given element is present in an array.
 *
 * @param {Object[]} array - the array to scan for the given element.
 * @param {Object} element - the element to look for.
 *
 * @returns {boolean} true if array contains element, false otherwise
 */
function contains(array, element) {
  let result = false
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result = true
      break
    }
  }
  return result
}
