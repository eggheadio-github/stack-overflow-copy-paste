export default isToday

/**
 * This method tests if a given date is today
 *
 * @param {Date} date - date to be evaluated
 * @returns {Boolean} - True if date is today, false otherwise
 */
function isToday(date) {
  if (!(date instanceof Date)) {
    return false
  }
  const today = new Date()

  return today.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)
}

