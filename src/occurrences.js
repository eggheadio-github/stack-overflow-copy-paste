/**
 * Original Source: https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
 *
 * Function that count occurrences of a substring in a string
 *
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 */

function occurrences(string, subString, allowOverlapping) {
  string += ''
  subString += ''
  if (subString.length <= 0) {
    return (string.length + 1)
  }

  let n = 0
  let pos = 0
  const step = allowOverlapping ? 1 : subString.length
  let flag = true

  while (flag) {
    pos = string.indexOf(subString, pos)
    if (pos >= 0) {
      ++n
      pos += step
    } else {
      flag = false
    }
  }
  return n
}

export default occurrences
