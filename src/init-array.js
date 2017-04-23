export default initArray

/**
 * Original Source:
 * http://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
 *
 * This method will return an array with the given length, prefilled with given value
 *
 * @param {Number} len - the length of the array
 * @param {*} value - The value to prefill
 * @return {Array} - The prefilled array
 */
function initArray(len, value) {
  return new Array(len).fill(value)
}
