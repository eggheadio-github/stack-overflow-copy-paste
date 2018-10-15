export default removeProperty

/**
 * Original Source: https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
 *
 * This method will remove named property from given object
 *
 * @param {Object} obj - the object to remove property from
 * @param {String} prop - name of property to remove
 */

function removeProperty(obj, prop) {
  delete obj[prop]
}
