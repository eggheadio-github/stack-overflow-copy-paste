export default padLeft

/**
 * Original Source: http://stackoverflow.com/a/34083277/971592
 *
 * This method will pad the left of the given string by
 * the given size with the given character
 *
 * @param {String} str - The string to pad
 * @param {Number} size - The total size to pad
 * @param {String} padWith - The character to use for padding
 * @return {String} - The padded string
 */
function padLeft(str, size, padWith) {
  if (size <= str.length) {
    return str
  } else {
    return Array(size - str.length + 1).join(padWith || '0') + str
  }
}
