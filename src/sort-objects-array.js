export default sortObjectsArray

/**
 * Original Source: http://stackoverflow.com/a/4760279/3142309
 *
 * This method returns a function that can be passed into Array.sort to sort an array of objects by a given property.
 * Prepending "-" to the property argument sorts the array in descending order.
 *
 * @param {String} property - The property to sort by
 * @return {Function} - A function that can be passed into Array.sort
 */
function sortObjectsArray(property) {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function compareFunction(a, b) {
    let result = 0
    if (a[property] < b[property]) {
      result = -1
    } else if (a[property] > b[property]) {
      result = 1
    }
    return result * sortOrder
  }
}
