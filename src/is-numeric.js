export default isNumeric

/**
 * Original Source:
 * https://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * This method will check whether an expression can be evaluated as a number or not.
 *
 * @param {Object} n - number to check
 * @return {Boolean} - True if n is numeric, false if not
 */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

