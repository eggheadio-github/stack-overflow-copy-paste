export default arrMultiply


/**
 * Original source: https://stackoverflow.com/questions/8454977/
 * how-do-i-multiply-each-member-of-an-array-by-a-scalar-in-javascript
 * This method will perform Array multiplication with a number.
 *
 * @param {Array} array - Array to be multipled with a number
 * @param {Number} multiplier - number to be multiply to each element of aray
 * @return {Array} - Result of multiplication
 */
function arrMultiply(array, multiplier) {
  return array.map(x => x * multiplier)
}
