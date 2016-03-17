export default fill

/**
 * Original Source: http://stackoverflow.com/a/13735425/971592
 *
 * This method will return an array with the given value prefilled
 *
 * @param {Array} array - the array to fill
 * @param {*} value - The value to prefill
 * @return {Array} - The prefilled array
 */
function fill(array, value) {
  return Array.apply(null, array).map(value.constructor.prototype.valueOf, value)
}

