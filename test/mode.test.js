import test from 'ava'
import {mode} from '../src'

test('mode in an empty array', t => {
  const array = []
  const expected = null
  const actual = mode(array)
  t.deepEqual(actual, expected)
})

test('mode in an array of string elements', t => {
  const array = ['apple', 'pear', 'banana', 'pear']
  const expected = 'pear'
  const actual = mode(array)
  t.deepEqual(actual, expected)
})

test('mode in an array of int elements', t => {
  const array = [1, 2, 3, 4, 3, 5]
  const expected = 3
  const actual = mode(array)
  t.deepEqual(actual, expected)
})
