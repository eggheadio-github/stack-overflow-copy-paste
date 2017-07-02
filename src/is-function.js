export default isFunction

/**
 * Original source: https://stackoverflow.com/a/7356528/3344977
 *
 * This method checks whether an object passed as an
 * argument is a javascript Function or not
 * @param {Object} functionToCheck - the object to check
 * @return {Boolean} - true if functionToCheck is a function else false
*/
function isFunction(functionToCheck) {
  const getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}
