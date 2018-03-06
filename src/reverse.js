export default reverse

/**
 * Original Source: https://stackoverflow.com/a/4859258/7221168
 *
 * Function that recursively reverses a string
 *
 * @param  {string} str - A string
 * @return {string}     - A reversed string
 */
function reverse(str) {
  if (str === '') {
    return str
  } else {
    return reverse(str.substr(1)) + str.charAt(0)
  }
}
