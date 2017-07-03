export default isEven

/**
 * Original Source:
 * https://stackoverflow.com/questions/16929958/how-to-determine-if-a-number-is-odd-or-even-in-java-script
 *
 * This method will check if a number is even or not.
 *
 * @param {Number} n - number to check
 * @return {Boolean} - True if n is even, false if not
 */
function isEven(n) {
  return n === parseFloat(n) && !(n % 2)
}
