export default largest

/**
 * Original Source: https://stackoverflow.com/a/33498918/9713990
 *
 * This method will find the largest element in an array
 *
 * @param {Array} array - the array
 * @return {Number | null} - Largest number or null (in case of empty array)
 */
function largest(array) {
  if (array.length <= 0) {
    return null
  }
  return Math.max(...array)
}

// This is great in case of small array but in large size array it fails throwing this error
// RangeError: Maximum call stack size exceeded
// In case of large array size (eg. 10000000) we can use this

/*
 * return array.sort().pop()
 *
 * sorts the array in ascending order and returns the last item (largest) using * pop() function
 */
