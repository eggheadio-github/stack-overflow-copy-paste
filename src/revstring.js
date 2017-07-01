export default revstring

/**
 * Original Source: https://stackoverflow.com/a/35211814
 *
 * This method will revers the order of a the chars in a string.
 *
 * @param {String} str - string whose order to be reversed
 * @returns {String} - string with reversed order
 */

function revstring(str) {
  let newString = ''
  for (let i = str.length; i >= 0; i--) {
    newString += str.charAt(i)
  }
  return newString
}
