export default BitwiseAnd

/**
 * Original Source: https://stackoverflow.com/a/35211814
 *
 * This method will revers the order of a the chars in a string.
 *
 * @param {Array} array - Array
 * @returns {Number} - Bitwise And of all the operations
 */
function BitwiseAnd(array) {
  return array.reduce((a, b) => {
    return a & b  //eslint-disable-line no-bitwise
  })
}
  
  
