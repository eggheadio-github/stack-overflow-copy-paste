export default shallowEqual

/**
 * This method will shallow compare two objects
 *
 * @param {Object} objA - first object to compare
 * @param {Object} objB - second object to compare
 * @returns {boolean} - result of comparison - true if objects are shallow equal
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true
  }

  if (typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB)
  for (let i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false
    }
  }

  return true
}
