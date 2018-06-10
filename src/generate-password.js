export default generatePassword

/**
 * Original source: https://stackoverflow.com/questions/12635652/generate-a-secure-password-in-javascript
 * This function would generate a password
 * it is a modified copy
 * @param {int}len - The minimum length of the returned password
 * @param {int}capitals - The number of characters which must be capitalised
 * @param {int}lowercases - The number of characters which must be lowercase
 * @param {int}specials - the number of characters which must be special characters
 * @param {int}digits - The number of characters which must be digits
 * @return {string} - The randomised password
**/
function generatePassword(len = 8, capitals = 1, lowercases = 1, specials = 1, digits = 1) {
  let password = ''
  const specialChars = '!@#$%^&*()_+{}:"<>?\\|[];\',./`~'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const digitChars = '0123456789'

  const allChars = specialChars + lowercaseChars + uppercaseChars + digitChars

  password += pick(specialChars, specials)
  password += pick(lowercaseChars, lowercases)
  password += pick(uppercaseChars, capitals)
  password += pick(digitChars, digits)
  password += pick(allChars, Math.max(len - capitals - lowercases - specials - digits, 0))
  password = shuffle(password)

  return password
}

function pick(characterList, count) {
  let chars = ''
  for (let i = 0; i < count; i++) {
    chars += characterList.charAt(Math.floor(Math.random() * characterList.length))
  }

  return chars
}

// Credit to @Christoph: http://stackoverflow.com/a/962890/464744
function shuffle(str) {
  const array = str.split('')
  let tmp, current
  let top = array.length

  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1))
      tmp = array[current]
      array[current] = array[top]
      array[top] = tmp
    }
  }

  return array.join('')
}
