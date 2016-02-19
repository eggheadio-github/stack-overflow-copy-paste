import test from 'ava'
import {flatten} from '../src'

test('flattens an array of arrays', t => {
  const original = [[1, 2], 3, [4, 5]]
  const expected = [1, 2, 3, 4, 5]
  const actual = flatten(original)
  t.same(actual, expected)
})

test('deep flattens an array of arrays', t => {
  const original = [1, 2, [3, 4, [5, 6], 7], 8]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8]
  const actual = flatten(original)
  t.same(actual, expected)
})
