export default debounce

/**
 * Original Source: https://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript
 * This method will prevent functions to be called repeatedly
 * @param {Function} func Function to debounce
 * @param {Number} [delay=0] The number of milliseconds to delay the function call
 * @param {Boolean} [immediate=false]
 * Weather to call the function and then wait or vice versa
 * @returns {Function} Returns the new debounced function.
 * @example
 * // Log the event after 1000ms of the last call
 * const debounced = debounce(console.log, 1000)
 * window.addEventListener('keyup', debounced)
 *
 * // Log the event immediately and wait 1000ms for the next call
 * const debounced = debounce(console.log, 1000, true)
 * window.addEventListener('keyup', debounced)
 *
 * // If 'delay' is falsy (except for 0), the function will not be debounced
 * const debounced = debounce(console.log)
 * window.addEventListener('keyup', debounced)
 */
function debounce(func, delay, immediate) {
  let timeout
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return (...args) => {
    const callNow = immediate && !timeout
    if (!delay && delay !== 0) {
      func(...args)
    } else {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        timeout = null
        if (!immediate) {
          func(...args)
        }
      }, delay)

      if (callNow) {
        func(...args)
      }
    }
  }
}
