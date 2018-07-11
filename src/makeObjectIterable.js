export default makeObjectIterable

/**
 * Original Source: https://stackoverflow.com/questions/48132121/how-to-make-iterable-object-in-javascript
 *
 * Makes a regular object iterable so that it can be used in constructs such
 * as a for-of loop.
 *
 * @param {Object} obj - object on which iteration is desired
 * @returns {Object} - returns the same object
 */
function makeObjectIterable(obj) {
  Object.defineProperty(obj, Symbol.iterator, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function iteratorCreator() {
      let idx = 0
      const ks = Object.keys(obj)
      return {
        next: function nextElement() {
          return {
            value: obj[ks[idx++]],
            done: idx > ks.length,
          }
        },
      }
    },
  })

  return obj
}
