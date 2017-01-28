import test from 'ava'
import {sum} from '../src'

test('sums all array elements', t => {
  const array = [1,2,3,4,5]
  const expected = 1 + 2 + 3 + 4 + 5
  const actual = sum(array)
  t.deepEqual(actual, expected)
})
