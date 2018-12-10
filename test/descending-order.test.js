import test from 'ava'
import {
  descendingOrder,
} from '../src'

test('Return a number which is the param re-arranged in descending order ', t => {
  const num = 213
  const expected = 321
  const actual = descendingOrder(num)
  t.deepEqual(actual, expected)
})
