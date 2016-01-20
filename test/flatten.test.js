import test from 'ava'
import flatten from '../src/flatten'

test('flattens an array of arrays', t => {
  const original = [[1, 2], 3, [4, 5]]
  const expected = [1, 2, 3, 4, 5]
  const actual = flatten(original)
  t.same(actual, expected)
})
