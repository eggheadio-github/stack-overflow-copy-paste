export default truncate

/**
 * Original Source: https://stackoverflow.com/questions/1301512/truncate-a-string-straight-javascript
 * This method will perserve a specified amount of starting characters and delete the rest
 * @param {String} target - the string to truncate
 * @param {Number} length - the amount of saved characters prior to truncation
 * @return {String} - the truncated string
 */

function truncate(target, length) {
  if (target.length <= length) {
    return target
  }
  return `${target.toString().substring(0, length)}...`
}
