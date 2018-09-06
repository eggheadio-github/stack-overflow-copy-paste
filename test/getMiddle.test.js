import test from 'ava'
import { getMiddle } from '../src'

test('Gets middle character of given string ', t => {
  const string = 'rumpelstiltskin'
  const expected = 't'
  const actual = getMiddle(string)
  t.deepEqual(actual, expected)
})
