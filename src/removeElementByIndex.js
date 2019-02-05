export default removeElementByIndex

/**
 * Original source: https://stackoverflow.com/a/5767335/10309455
 * This method removes the element from an array by index and returns edited array
 * @param {Array} array - base array
 * @param {Number} index - index to delete
 * @returns {Array} - array without deleted item
 */

function removeElementByIndex(array, index) {
  const updatedArray = [...array]
  updatedArray.splice(index, 1)
  return updatedArray
}
