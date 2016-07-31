import test from 'ava'
import {arrayFill} from '../src'

test('fills an array with a number', t => {
  const original = [1, 2, 3, 4]
  const expected = [7, 7, 7, 7]
  const actual = arrayFill(original, 7)
  t.deepEqual(actual, expected)
})

test('fills an array with a string', t => {
  const original = Array(4)
  const expected = ['wookie', 'wookie', 'wookie', 'wookie']
  const actual = arrayFill(original, 'wookie')
  t.deepEqual(actual, expected)
})

test('fills an array with a boolean', t => {
  const original = Array(4)
  const expected = [false, false, false, false]
  const actual = arrayFill(original, false)
  t.deepEqual(actual, expected)
})

test.todo('allow for non-primitive values like objects, arrays, and dates')

