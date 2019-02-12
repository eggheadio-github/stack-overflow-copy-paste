import test from 'ava'
import {second} from '../src'

test('Return second elements of the array', t => {
  const array = [1, 2, 3, -1]
  const expected = array[1]
  const actual = second(array)
  t.deepEqual(actual, expected)
})
