export default validateEmail

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line max-len

/**
 * Orginal Source: http://stackoverflow.com/questions/46155
 * This method will return an array with the given value prefilled
 *
 * @param {String} email - The email address to be validated
 * @return {Boolean} - True if the string passes the regex else False
 */
function validateEmail(email) {
  return regex.test(email)
}
