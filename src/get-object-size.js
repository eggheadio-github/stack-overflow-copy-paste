export default getObjectSize

/**
 * @module getObjectSize
 * @description Returns the size of an object
 *
 * Original Source: http://stackoverflow.com/a/6700/4038230
 *
 * @param {Object} obj - The Object to check size of
 * @return {Number} - The size of the Object
 * */

function getObjectSize(obj) {
  return Object.keys(obj).length
}
