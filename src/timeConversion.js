export default timeConversion

/**
* Original Source: https://stackoverflow.com/questions/46883149
* This method will calculate the time difference
* between two time values
*
* @param {String} startTime - string with the start time in hh:mm format
* @param {String} endTime - string with the end time in hh:mm format
* @return {String} - should return a string with the time difference in hh:mm format
*/

function timeConversion(time) {
  
  let convertedTime = time.substr(2, 6)
  if (time.charAt(8) === 'A') {
    if (time.charAt(0) === '1' && time.charAt(1) === '2') {
      convertedTime = '00'.concat(convertedTime)
    } else {
      convertedTime = time.substr(0, 2) + convertedTime
    }
  }
  if (time.charAt(8) === 'P') {
    if (time.charAt(0) === '1' && time.charAt(1) === '2') {
      convertedTime = '12'.concat(convertedTime)
    } else {
      const a = time.substr(0, 2)
      const b = Number(a)
      const c = (b + 12).toString()
      convertedTime = c.concat(convertedTime)
    }
  }
  return convertedTime
}
