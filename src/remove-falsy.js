export default removeFalsy

/**
 * Original source: https://stackoverflow.com/questions/32906887/remove-all-falsy-values-from-an-array
 *
 * This method removes any falsy values in an array while maintaining the array's order
 * @param {Array} arr - the array filter
 */
 
function removeFalsy(arr) {
  return arr.filter(Boolean)
}
