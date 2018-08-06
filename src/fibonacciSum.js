export default fibonacciSum

/**
 * Original Source: https://stackoverflow.com/a/31388603
 *
 * Function that returns the sum of a fib series
 *
 * @param  {Number} num - A number
 * @return {Number}     - sum of the numbers
 */

function fibonacciSum(num) {
  if (num <= 0) {
    return 0
  }
  const fib = []
  fib[0] = 0
  fib[1] = 1
  let sum = fib[0] + fib[1]
    // remaining numbers
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
    sum += fib[i]
  }
  return sum
}


