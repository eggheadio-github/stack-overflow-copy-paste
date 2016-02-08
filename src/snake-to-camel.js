export default snakeToCamel

const regex = /([\-_]\w)/g

/**
 * Original Source: http://stackoverflow.com/a/6661012/971592
 *
 * This method converts a snake-case string to a camelCase string
 *
 * @param {String} s - The snake-case string to camelCase
 * @return {String} - The camelCase version of the snake-case string
 */
function snakeToCamel(s) {
  return s.replace(regex, function snakeToCamelReplacer(m) {
    return m[1].toUpperCase()
  })
}
