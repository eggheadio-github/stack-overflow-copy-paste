import test from 'ava'
import {
  arrayAverage
} from '../src'

test('Calculates the average of an array', t => {
  const array = [1, 2, 3, 4]
  const expected = 2.5
  const actual = arrayAverage(array)
  t.deepEqual(actual, expected)
})