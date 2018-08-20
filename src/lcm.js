export default lcm

/**
 * Original source: https://stackoverflow.com/a/38407734
 *
 * This method returns least common multiple of two integers
 *
 * @param {Number} a - first integer
 * @param {Number} b - second integer
 * @return {Number} - least common multiple
 */

function gcd(a, b) {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

function lcm(a, b) {
  return a * b / gcd(a, b)
}
