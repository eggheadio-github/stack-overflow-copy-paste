export default removeAccents

/**
 * Original Source: https://stackoverflow.com/a/37511463/2002514
 *
 * This method will remove accentuated characters from a string.
 *
 * @param {String} str - The string to remove accentuated characters from.
 * @return {String} - The given string without accentuated characters.
 */
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
