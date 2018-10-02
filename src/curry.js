export default curry

/*
 * Original Source: https://stackoverflow.com/a/14045565/6121634
 * Updated to ES6 format to meet style guides via:
 * https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#some-now-some-later
 *
 * This utility function takes a function as a parameter and returns a curried version of the function.
 *
 * @param {Function} func - The function to be curried
 * @return {Function} - The curried version of the initially provided function
 */
function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg]

      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}
