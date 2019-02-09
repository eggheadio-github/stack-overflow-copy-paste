/**
 * Handler functions
 */
const handlers = {
  handleDate: date => {
    // Handle Date
    const copy = new Date()
    copy.setTime(date.getTime())
    return copy
  },
  handleArray: array => {
    const {length} = array

    // Init array
    const copy = array.constructor(length)

    for (let i = 0; i < length; i++) {
      copy[i] = clone(array[i])
    }

    return copy
  },
  handleObject: object => {
    // Also copy prototypes
    const copy = Object.create(Object.getPrototypeOf(object))

    for (const attr in object) {
      if (object.hasOwnProperty(attr)) {
        copy[attr] = clone(object[attr])
      }
    }
    return copy
  },
  handle(object) {
    if (object instanceof Date) {
      return this.handleDate(object)
    } else if (object instanceof Array) {
      return this.handleArray(object)
    } else {
      return this.handleObject(object)
    }
  },
}

/**
 * Original StackOverflow answer https://stackoverflow.com/a/728694/6880789
 * This function will return cloned value
 * It can handle primitive data-type, Date, Array and Object
 * @param {null|undefined|number|string|function|object} object - any type
 * @return {null|undefined|number|string|function|object} - any type
 */
function clone(object) {
  // Handle primitive data-types, null and undefined
  if (typeof object !== 'object' || object === null || typeof object === 'function') {
    return object
  }
  return handlers.handle(object)
}

export default clone
