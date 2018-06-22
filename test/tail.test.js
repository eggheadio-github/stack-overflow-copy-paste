import test from 'ava'
import {tail} from '../src'

test('returns empty array for null', t => {
  const expected = []
  const actual = tail(null)
  t.deepEqual(actual, expected)
})

test('returns empty array for undefined', t => {
  const expected = []
  const actual = tail(undefined)
  t.deepEqual(actual, expected)
})

test('returns empty array for empty array', t => {
  const expected = []
  const actual = tail([])
  t.deepEqual(actual, expected)
})

test('returns the tail of array', t => {
  const original = [1, 2, 3, 4, 5]
  const expected = [2, 3, 4, 5]
  const actual = tail(original)
  t.deepEqual(actual, expected)
})
