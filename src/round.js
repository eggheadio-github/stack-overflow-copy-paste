export default round

/**
 * Original Source: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
 *
 * This method will round a number to the specified decimal places.
 *
 * @param {number} num - Number to round
 * @param {number} decimalPlaces - Decimal places to be rounded to
 * @return {number} - Rounded number
 */

function round(num, decimalPlaces) {
  if (decimalPlaces < 0) {
    throw new Error('decimalPlaces cannot be negative')
  }

  return +(`${Math.round(+`${num}e+${decimalPlaces}`)}e-${decimalPlaces}`)
}
