export default median

/**
 * Original source: https://stackoverflow.com/a/29544442/4573129
 * This method will return the median value of an array
 * @param {Array} array - the array to find the median
 * @return {Number} - the median of the values in the array
 */

function median(array) {
  if (!Array.isArray(array)) {
    return `${array} is not an array.`
  }
  if (array.some(isNaN)) {
    return `${array} contains non-numeric items.`
  }
  if (array.length === 0) {
    return `${array} has no items.`
  }

  let medianValue = 0
  const sortedArray = array.sort((curr, next) => (curr - next))
  const index = Math.floor(sortedArray.length / 2)

  if (sortedArray.length % 2 === 0) {
    medianValue = (sortedArray[index - 1] + sortedArray[index]) / 2
  } else {
    medianValue = sortedArray[index]
  }

  return medianValue
}
