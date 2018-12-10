export default reduceCount

/**
 * Original Source: https://egghead.io/courses/reduce-data-with-javascript
 *
 * The function will count how many times an item occurs in an array,
 * even in arrays within the array.
 * @param  {array} array - The array
 * @param  {any type} item - The variable whose occurences will be counted
 * @return {number} - The amount of times the item is found in the array(s)
 */

function reduceCount(array, itemToCount) {
  // make sure the array passed in is actually an array
  if (!Array.isArray(array)) {
    return `${array} isn't an array.`
  }

  // make sure we got something to work with in that array
  if (array.length === 0) {
    return `${array} is empty.`
  }

  // reduce the array and count the occurences of item
  return array.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a + reduceCount(b, itemToCount)
    }
    return a + (b === itemToCount ? 1 : 0)
  }, 0)
}
