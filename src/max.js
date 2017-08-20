export default max
/**
 * This method return the maximum value of the list that user gave
 *
 * @param {Array} list - get the maximum value of the list
 * @returns {Number} - the maximum value of the list
 */

function __getMax(maxValue, value) {
  if (value > maxValue) {
    maxValue = value
  }
  return maxValue
}

function max(list) {
  return list.reduce(__getMax, Number.NEGATIVE_INFINITY)
}
