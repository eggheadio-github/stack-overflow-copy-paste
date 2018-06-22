export default tail

/**
 * Original Source: https://stackoverflow.com/a/35361274/5801753
 *
 * This function gets all but the first element of array
 *
 * @param {Array} array - The array to get the tail from
 * @return {Array} - The array without the first element
 */
function tail(array) {
  return Boolean(array) ? array.slice(1) : []
}
