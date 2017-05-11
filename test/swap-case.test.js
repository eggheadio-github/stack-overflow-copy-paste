import test from 'ava'
import {swapCase} from '../src'

test('Swap cases from string ', t => {
  const original = 'That\'s one small step for a DEVELOPER, one giant leap for a Community.'
  const expected = 'tHAT\'S ONE SMALL STEP FOR A developer, ONE GIANT LEAP FOR A cOMMUNITY.'
  const actual = swapCase(original)
  t.is(actual, expected)
})
