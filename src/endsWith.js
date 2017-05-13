export default endsWith

/**
 * Original source: http://stackoverflow.com/questions/280634/endswith-in-javascript
 *
 * Checks if a string ends with a given input
 *
 * @param {String} str - The string to validate against
 * @param {String} suffix - The input to match
 * @return {Boolean} - True if 'str' ends with 'suffix', otherwise false
 */
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1
}
