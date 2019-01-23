export default rollDice

/**
 * Original Source: https://stackoverflow.com/questions/15603217/random-dice-nr-javascript
 *
 * This method will return a random value from rolling a dice.
 *
 * @return {number} - Random number between 1 and 6
 */

function rollDice() {
  return Math.floor(6 * Math.random()) + 1
}
