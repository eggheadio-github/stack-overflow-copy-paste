import test from 'ava'
import {flatten} from '../src'

test('flattens an array of arrays', t => {
  const original = [[1, 2], 3, [4, 5]]
  const expected = [1, 2, 3, 4, 5]
  const actual = flatten(original)
  t.deepEqual(actual, expected)
})

test('flattens multiple arrays', t => {
  const original1 = [[1, 2], 3, [4, 5]]
  const original2 = ['A', 'b', ['C', ['d', 'E']]]
  const original3 = [true, false, true, false]
  const expected = [1, 2, 3, 4, 5, 'A', 'b', 'C', 'd', 'E', true, false, true, false]
  const actual = flatten(original1, original2, original3)
  t.deepEqual(actual, expected)
})

test('deep flattens an array of arrays', t => {
  const original = [1, 2, [3, 4, [5, 6], 7], 8]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8]
  const actual = flatten(original)
  t.same(actual, expected)
})
