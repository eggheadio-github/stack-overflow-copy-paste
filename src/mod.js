export default mod

/**
 * Original Source: http://stackoverflow.com/a/17323608
 *
 * This method provides a modulo function that will always return a positive
 * value even when supplied a negative dividend.
 *
 * @param {Number} dividend - the number to be divided by divisor
 * @param {Number} divisor - the number divided by
 * @returns {Number} - the remainder
 */

function mod(dividend, divisor) {
  return ((dividend % divisor) + divisor) % divisor
}
