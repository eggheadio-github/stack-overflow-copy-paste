export default gcd

/**
 * This method return greatest common divisor for two numbers
 * @param {Number} a - first number
 * @param {Number} b - second number
 * @return {Number} - greatest common divisor
 */

function gcd(a, b) {
  if (!b) {
    return a
  }
  
  return gcd(b, a % b)
}
