export default timeDifference

/**
* Original Source: https://stackoverflow.com/questions/46883149
* This method will calculate the time difference
* between two time values
*
* @param {String} startTime - string with the start time in hh:mm format
* @param {String} endTime - string with the end time in hh:mm format
* @return {String} - should return a string with the time difference in hh:mm format
*/

function timeDifference(startTime, endTime) {
  
  let hourDiff = ((new Date(`01/01/2018 ${endTime}`)) - (new Date(`01/01/2018 ${startTime}`))) / 60000
  let hours = 0
  let minutes = 0

  // If difference is negative, add 24 hours
  hourDiff = (hourDiff < 0) ? hourDiff + 1440 : hourDiff

  hours = Math.floor(hourDiff / 60)
  minutes = Math.floor(hourDiff % 60)

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}



