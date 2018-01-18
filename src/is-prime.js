export default isPrime

/**
 * This method tests if a given number is prime
 *
 * @param {Number} number - number to be evaluated
 * @returns {Boolean} - True if number is prime, false otherwise
 */
function isPrime(number) {
  let i
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return number >= 1
}
