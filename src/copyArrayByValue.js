export default copyArrayByValue

/**
 * Original Source: https://stackoverflow.com/a/7486130/5679427
 *
 * This method will clone the array and return a reference to the new array.
 *
 * @param {Array} array - The array to be copied
 * @return {Array} - Reference to the copied array
 */
function copyArrayByValue(array) {
  return array.slice()
}
