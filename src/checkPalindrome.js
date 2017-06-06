export default checkPalindrome

/**
*Original Source: https://stackoverflow.com/questions/41739845/freecodecamp-checking-for-palindromes
*This method will check to see if
*after removing all non alphanumeric characters,
*the string is a palindrome
* @param {String} str - string to check for Palindrome
* @return {Boolean} - should return true or false
*/

function checkPalindrome(str) {
  const newstr = str.replace(/[\W_]/g, '').toLowerCase()

  if (newstr === newstr.split('').reverse().join('')) {
    return true
  }
  return false
}
