export default temperatureConverter
/**
 * Original Source: https://stackoverflow.com/questions/15122347/
 *
 * This function gets temperature in fahrenheit and converts it into celsius
 *
 * @param {Number} fahrenheit  - Temperature in fahrenheit
 * @return {Number} - Temperature in celsius
 */
function temperatureConverter(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}
