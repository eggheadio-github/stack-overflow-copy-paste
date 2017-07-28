export default isOdd

/**
 * Original Source:
 * https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
 *
 * This method will check if a number is odd or not.
 *
 * @param {Number} num - number to check
 * @return {Boolean} - True if n is odd, false if not
 */
function isOdd(num) {
  return num % 2 !== 0
}
