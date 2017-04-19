export default reducer

/**
 * Original Source: https://egghead.io/courses/reduce-data-with-javascript
 *
 * This method will reduce duplicate values in an array,
 * into an object with count for each individual value.
 * @param  {Object} tallyMap - The object from which the values are taken
 * @param  {number} vote - The vote defines a item in array
 * @return {object} - A comma-separated Object for each individual array values with count
 */
function reducer(tallyMap, vote) {
  if (tallyMap.hasOwnProperty(vote)) {
    tallyMap[vote] = tallyMap[vote] + 1
  } else {
    tallyMap[vote] = 1
  }
  return tallyMap
}
