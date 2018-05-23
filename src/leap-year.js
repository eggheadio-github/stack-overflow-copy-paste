export default isLeapYear

/**
 * This method will check if the given year is a leap year.
 * More information on http://www.youtube.com/watch?v=xX96xng7sAE
 *
 * @param {Number} year - year to check if leap year
 * @return {Bool} - Resul if year is leap year
 */
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
