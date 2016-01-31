export default flatten

/**
 * Original Source: http://stackoverflow.com/a/15030117/971592
 *
 * This method will flatten an array given to it.
 *
 * @param {Array} arr - The array to flatten
 * @return {Array} - The flattened array
 */
function flatten(arr) {
  return arr.reduce(function flattenReducer(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

