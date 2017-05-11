export default swapCase

/**
 * Original source: http://stackoverflow.com/a/40192407/4204587
 *
 * This method will swap cases for a given string.
 *
 * @param {String} s - string for case swapping
 * @return {String} - string with all cases swapped
 */
function swapCase(s) {
  return s.split('').map(function swapper(c) {
    return c === c.toUpperCase() ?
           c.toLowerCase() :
           c.toUpperCase()
  }).join('')
}
