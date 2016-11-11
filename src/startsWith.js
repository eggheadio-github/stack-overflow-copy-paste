export default startsWith

/**
 * Original Source: http://stackoverflow.com/a/646631/5954939
 *
 * This method will return a bollean indicating whether a string starts with a given input.
 *
 * @param {String} str - The string to validate against
 * @param {String} head - The input to match with str substring
 * @return {Bollean} - True if 'str' starts with 'head', otherwise false
 */
function startsWith(str, head) {
  const tmp = str.substring(0, head.length)
  const res = (tmp === head)
  return res
}
