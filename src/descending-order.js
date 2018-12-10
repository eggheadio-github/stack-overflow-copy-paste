export default descendingOrder

/**
 * This method will return a number which is the
 * supplied number re-arranged in descending order
 * eg: descendingOrder(231) returns 321
 * @param {Number} - the Number to be sorted
 * @returns {Number} - number sorted in decending order
 */

function descendingOrder(num) {
  return Number(String(num).split('').sort().reverse().join(''))
}
