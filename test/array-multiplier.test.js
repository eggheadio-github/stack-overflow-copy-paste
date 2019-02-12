import test from 'ava'
import {
  arrMultiply,
} from '../src'

test('Multiply an array with a scaler number', t => {
  const array = [1, 2, 3, 4]
  const multiplier = 2
  const expected = [2, 4, 6, 8]
  const actual = arrMultiply(array, multiplier)
  t.deepEqual(actual, expected)
})
