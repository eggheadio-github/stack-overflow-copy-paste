export default dec2bin

/**
 * Converts a decimal integer into binary number
 * Only works for positive integers
 * Untested for values greater than 32-bit
 * Floating point numbers truncated to integer
 *
 * @param {String} dec - string version of integer
 * @return {String} - binary version of input as string
 */
function dec2bin(dec) {
  if (parseInt(dec, 10) < 0) {
    throw new RangeError('Input must be a positive integer')
  } else {
    return parseInt(dec, 10).toString(2)
  }
}
