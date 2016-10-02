export default isNullOrWhitespace

/**
 * Original Source: http://stackoverflow.com/a/32800728
 *
 * This method checks whether a string passed as an
 * argument is undefined, null, empty, or whitespace.
 *
 * @param {String} str - The string to check
 * @return {Boolean} - True if str is undefined, null, empty, or whitespace else false
 */
function isNullOrWhitespace(str) {
  return !str || !str.trim()
}
