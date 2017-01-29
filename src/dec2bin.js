export default dec2bin

/**
 * Converts a decimal integer into binary number
 * Only works for positive integers
 * Untested for values greater than 32-bit
 * Floating point numbers truncated to integer
 *
 * @param {String} dec - string version of integer
 * @param {Number} dec - number version of integer
 * @return {String} - binary version of input as string
 */
function dec2bin(dec) {
  if (parseInt(dec, 10) < 0) {
    return "Only works for positive integers"
  } else {
    return parseInt(dec, 10).toString(2)
  }
}
