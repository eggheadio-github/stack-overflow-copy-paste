export default removeElementFromArray

/**
 * This method will remove element and return rest of the array
 *
 * @param {Array} arr - the array
 * @param {Number} re - element to be removed
 * @return {Array} - new array
 */

function removeElementFromArray(arr, re) {
  const index = arr.indexOf(re)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}
