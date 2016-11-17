export default removeDuplicates

/**
 * Original Source: http://stackoverflow.com/a/18328062
 *
 * This method will remove duplicate values in an array,
 * leaving one of each value.
 *
 * @param {Array} arr - The Array to remove all duplicates from.
 * @return {Array} - The Array without any duplicates.
 */

function removeDuplicates(arr) {
  return arr.filter((item, index, inputArray) => {
    return inputArray.indexOf(item) === index
  })
}
