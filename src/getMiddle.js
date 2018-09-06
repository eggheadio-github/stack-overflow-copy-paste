export default getMiddle

/**
 * This method will return the character that stays in the middle of the string.
 *
 * @param {String} string - string to get the middle character from
 * @return {String} - middle character of the string
 **/

function getMiddle(string) {
  return string.substr(Math.ceil(string.length / 2 - 1), string.length % 2 === 0 ? 2 : 1)
}
