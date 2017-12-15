export default flatten

/**
 * Original Source: http://stackoverflow.com/a/15030117/971592
 *
 * This method will flatten arrays given to it. It's a copy.
 *
 * @param {...Array} arrays - The array(s) to flatten
 * @return {Array} - The flattened array
 */
function flatten(...args) {
  return args.reduce(function flattenReducer(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(...toFlatten) : toFlatten)
  }, [])
}
