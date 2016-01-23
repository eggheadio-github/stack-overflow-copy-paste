export default flatten

function flatten(arr) {
  return arr.reduce(function flattenReducer(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

