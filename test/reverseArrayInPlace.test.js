import test from 'ava'
import {reverseArrayInPlace} from '../src'

test('Reverses an array in place', t => {
  const array = [1, 2, 3, 4, 5]
  const expected = [5, 4, 3, 2, 1]
  const actual = reverseArrayInPlace(array)
  t.deepEqual(actual, expected)
})

test('Reverses an empty array', t => {
  const array = []
  const expected = []
  const actual = reverseArrayInPlace(array)
  t.deepEqual(actual, expected)
})

test('Reverses an with one item', t => {
  const array = [1]
  const expected = [1]
  const actual = reverseArrayInPlace(array)
  t.deepEqual(actual, expected)
})
