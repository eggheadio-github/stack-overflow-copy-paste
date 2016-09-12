export default isArray

/**
 * Original Source: http://stackoverflow.com/a/4775737
 *
 * This method checks whether an object passed as an
 * argument is a javascript Array or not.
 *
 * @param {Object} someObject - the object to check
 * @return {Boolean} - True if someObject is an array else false
 */

function isArray(someObject) {
  const objectToString = Object.prototype.toString.call(someObject)
  return objectToString === '[object Array]'
}
