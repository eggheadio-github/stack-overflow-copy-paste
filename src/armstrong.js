export default armstrong

/**
 * This method will check if a number is an armstrong number.
 * @param {Number} num number to check
 * @return{Boolean} True or false
 */

function armstrong(num) {
  let eachDigit = 0
  let check = 0
  let digit = 0
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    digit = digit + 1
  }
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    eachDigit = i % 10
    check = check + Math.pow(eachDigit, digit)
  }
  if (check === num) {
    return true
  } else {
    return false
  }
}
