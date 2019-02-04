/* eslint-disable no-unused-vars */
export default hex2hsl

/**
 * Original Source: https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript
 *
 * This method will convert colors in Hex to HSL format.
 *
 * @param {String} hex - The Hex value to be converted
 * @return {String} - The HSL value of the color
 */


// eslint-disable-next-line complexity
function hex2hsl(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  let r = parseInt(result[1], 16)
  let g = parseInt(result[2], 16)
  let b = parseInt(result[3], 16)

  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = (max + min) / 2
  let s = (max + min) / 2
  let l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    // eslint-disable-next-line default-case
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g: h = (b - r) / d + 2
        break
      case b: h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  h = Math.round(360 * h)
  return `hsl(${h}, ${s}%, ${l}%)`
}
