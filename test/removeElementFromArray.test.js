import test from 'ava'
import {removeElementFromArray} from '../src'

test('Remove an element from array', t => {
  const arr = [0, 1, 2, 3]
  const number = 3
  const expected = [0, 1, 2]
  const actual = removeElementFromArray(arr, number)
  t.deepEqual(actual, expected)
})

test('Element not found', t => {
  const arr = [0, 1, 2, 3]
  const number = 4
  const expected = [0, 1, 2, 3]
  const actual = removeElementFromArray(arr, number)
  t.deepEqual(actual, expected)
})
