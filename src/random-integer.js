export default randomInteger

/**
 * Original Source: http://stackoverflow.com/a/24152886
 *
 * This method will return a random integer
 * between min and max number
 *
 * @param {Number} min - The minimum number to be random
 * @param {Number} max - The maximum number to be random
 * @return {Number} A random integer between min and max
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
