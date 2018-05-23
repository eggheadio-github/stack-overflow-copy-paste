export default reverseArrayInPlace

/**
 * Original Source: https://stackoverflow.com/a/41387918
 *
 * Function that reverses an array without creating a placeholder array.
 *
 * @param  {Array} array - An array
 * @return {Array}       - A reversed array
 */

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const old = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = old
  }
  return array
}
