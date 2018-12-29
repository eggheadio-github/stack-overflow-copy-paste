import test from 'ava'
import {copyArrayByValue} from '../src'

test('copies the given array', t => {
  const original = ['a', 'b', 'c', 1, 2, {d: 'e'}]
  const expected = ['a', 'b', 'c', 1, 2, {d: 'e'}]
  const actual = copyArrayByValue(original)
  t.deepEqual(actual, expected)
})
