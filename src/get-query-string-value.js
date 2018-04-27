export default getQueryStringValue

/**
 * Original Source: https://stackoverflow.com/questions/901115/
 *
 * This method will return the query string value
 * of the given parameter name
 *
 * @param {String} name - The parameter name in query string
 * @param {String} url - The url with query string
 * @return {String} - The query string value
 */

function getQueryStringValue(name, url) {

  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(url)
  if (!results) {
    return null
  }

  if (!results[2]) {
    return ''
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
