import test from 'ava'
import {getMiddle} from '../src'

test('Gets middle character of given string with a length of uneven number of characters ', t => {
  const string = 'rumpelstiltskin'
  const expected = 't'
  const actual = getMiddle(string)
  t.deepEqual(actual, expected)
})
test('Gets  two middle characters of given string with a length of even number of characters ', t => {
  const string = 'pull'
  const expected = 'ul'
  const actual = getMiddle(string)
  t.deepEqual(actual, expected)
})
