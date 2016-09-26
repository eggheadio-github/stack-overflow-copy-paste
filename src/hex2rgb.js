export default hex2rgb

/**
 * Original Source: http://stackoverflow.com/a/12342275
 *
 * This method will convert colors in Hex to RGB format.
 *
 * @param {String} hex - The Hex value to be converted
 * @param {Number} opacity - The opacity value of the color
 * @return {String} - The RGB value of the color
 */
function hex2rgb(hex, opacity) {
  let h = hex.replace('#', '')
  h = h.match(new RegExp(`(.{${h.length / 3}})`, 'g'))

  for (let i = 0; i < h.length; i++) {
    h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16)
  }
  if (typeof opacity !== 'undefined') {
    h.push(opacity)
  }

  return `rgba(${h.join(',')})`
}
