/* eslint prefer-spread:0 */
export default flipBool

/**
 * Original Source:
 * https://github.com/eggheadio-github/stack-overflow-copy-paste/issues/251
 
 * This method will take a boolean value and reverse its value.
 *
 * @param {bool} boolArg - the bool that will be mutated
 * @return {bool} boolArgv - the bool that was mutated
 *
 * Takes a bool value and checks to see if it's data type is boolean. If true,
 * it will reverse the value of the passed boolean and return that value. If
 * false, it returns a string with the value 'boolean expected'.
 */

function flipBool(boolArg) {
    
  if (typeof (boolArg) === 'boolean') {

    if (boolArg === true) {
      boolArg = false
    } else {
      boolArg = true
    }
    return boolArg
  } else {
    return 'boolean expected'
  }
}
