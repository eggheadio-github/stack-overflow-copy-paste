export default shallowObject

/**
 * This method will shallow compare two objects
 *
 * @param {Object} a - first object to compare
 * @param {Object} b - second object to compare
 * @returns {boolean} - result of comparison - true if objects are shallow equal
 */
function shallowObject(a, b) {
  let ka = 0
  let kb = 0

  for (const key in a) {
    if (a.hasOwnProperty(key) && a[key] !== b[key]) {
      return false
    }

    ka++
  }

  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      kb++
    }
  }

  return ka === kb
}
