export default objectValuesToString

/**
 * Original Source: http://stackoverflow.com/a/31017540
 *
 * This method will take an object in parameter and return a
 * comma-separated String composed of all its properties' values
 *
 * @param  {Object} obj - The object from which the values are taken
 * @return {String} A comma-separated String that contains all the object values
 */
function objectValuesToString(obj) {
  if (!obj) {
    return ''
  } else if (typeof obj !== 'object' || obj instanceof Date) {
    return ''
  }

  return Object.keys(obj).map(key => obj[key])
    .filter(val => val || val === 0 || val === '0' || val === false)
    .join(', ')
}
