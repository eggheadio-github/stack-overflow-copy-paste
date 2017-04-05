export default searchAndReplace

/**
 *Original Source:
 *https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript/1144788#1144788
 *
 *This method will replace the matched word in the given string
 *string

 * @param {String} str - The given string
 * @param {String} find - The particular string that we want to replace
   @param {String} replace - The string to replace the matched string
   @return {String} - The final string with replaced words
 */

function searchAndReplace(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace)
}
