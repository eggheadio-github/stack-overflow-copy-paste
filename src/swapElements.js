/**
 * Created by HP on 3/1/2018.
 */
export default swapElements


/**
 * Original source https://stackoverflow.com/questions/872310/javascript-swap-array-elements
 *
 * This function swaps elements at indexes 'a' and 'b' in array 'target'
 *
 * @param {Number} x - the first index in the array 'target'
 * @param {Number} y - the second index in the array 'target'
 * @param {Array} list - targeted array
 */
function swapElements(x, y, list) {
  const b = list[y]
  list[y] = list[x]
  list[x] = b
}
