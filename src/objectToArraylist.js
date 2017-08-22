export default convertObj
/**
*Original Source: https://stackoverflow.com/questions/45092685/
*how-do-i-convert-an-object-to-an-array-list-in-js/45092727#45092727
*
*This method will place the contents of an object into an arraylist
*
*@param {Object} obj - object to convert
*@return {Array} result - converted object
*/
function convertObj(obj) {
  const result = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]])
    }
  }
  return result
}
