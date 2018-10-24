export default dec2hex

/**
 * Original source: https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
 * This method will return the Hex equivalent or any num
 * However the native function can only handle Number.MAX_SAFE_INTEGER => 9007199254740991
 * @param {Number} num - the array to calculate average
 * @return {String} - String with Hex value
 */

function dec2hex(num) {
  const hextString = num.toString(16)
  return hextString
}
