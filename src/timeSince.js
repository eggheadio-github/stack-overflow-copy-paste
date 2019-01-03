export default timeSince

/**
 * This method will return time ellapse since in "xxxx days/hours/mins/seconds ago" format.
 * Inspired by: https://stackoverflow.com/a/3177838/8301717
 * @param {Date} date - The date object
 * @return {String} - Formatted time
 */

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000)
  let interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return `${interval} days ago`
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return `${interval} hours ago`
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return `${interval} minutes ago`
  }
  return `${Math.floor(seconds)} seconds ago`
}
