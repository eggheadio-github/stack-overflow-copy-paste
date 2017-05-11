export default shallowEqual

function haveEqualKeys(a, b) {
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  return keysA.length === keysB.length
}

function isNullOrNonObject(obj) {
  return typeof obj !== 'object' || obj === null
}

function compareKeys(objA, objB) {
  const keysA = Object.keys(objA)
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB)
  for (let i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false
    }
  }

  return true
}

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

  if (isNullOrNonObject(objA) || isNullOrNonObject(objB) || !haveEqualKeys(objA, objB)) {
    return false
  }

  return compareKeys(objA, objB)
}
