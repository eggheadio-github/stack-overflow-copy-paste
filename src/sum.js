export default sum

/**
* Original Source: http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
*
* This method will sum up all the array elements, assuming the elements are all numbers
*
* @param {Array} arr - the arr to be summed up
*
*/

function sum(arr) {
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}
