export default capitalizeFirstLetter

/**
 * Original source: https://stackoverflow.com/questions/1026069/
 * This function would convert the first letter of any string passed to it into uppercase
 * it is a copy
 * @param {string}string - The string to capitalize the first letter of a string
 * @return {string} - The capitalized string
**/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
