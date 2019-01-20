export default mode

/**
 * Original Source: https://stackoverflow.com/a/1053865
 *
 * This method will return the element with the highest occurrence in an array.
 *
 * @param {Array} array - The array
 * @return {*} - The element which has the highest occurrence
 */
function mode(array) {
  if (array.length === 0) {
    return null
  }
  const modeMap = {}
  let maxEl = array[0]
  let maxCount = 1
  for (let i = 0; i < array.length; i++) {
    const el = array[i]
    if (modeMap[el] === undefined) {
      modeMap[el] = 1
    } else {
      modeMap[el]++
    }
    if (modeMap[el] > maxCount) {
      maxEl = el
      maxCount = modeMap[el]
    }
  }
  return maxEl
}
