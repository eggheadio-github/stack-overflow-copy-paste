/**
 * Created by HP on 3/1/2018.
 */
export default swapElements;


/**
 * Original source https://stackoverflow.com/questions/872310/javascript-swap-array-elements
 *
 * This function swaps elements at indexes 'a' and 'b' in array 'target'
 *
 * @param x {Number} - the first index in the array 'target'
 * @param y {Number} - the second index in the array 'target'
 * @param list {Array} - targeted array
 */
function swapElements(x,y, list){
    var b = list[y];
    list[y] = list[x];
    list[x] = b;
}