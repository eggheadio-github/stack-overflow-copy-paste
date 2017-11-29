export default average

/**
 * Original source: https://stackoverflow.com/a/29544442/4573129
 * This method will return the average of an array
 * @param {Array} array - the array to calculate average
 * @return {Number} - the average of the values in the array
 */
 
function average(array) {
  const sum = array.reduce((total, current) => {
    return total + current
  })
  return sum / array.length
}
