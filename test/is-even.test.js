import test from 'ava'
import {isEven} from '../src'

test('checks if number is even and returns true', t => {
  const n = 26
  const expected = true
  const actual = isEven(n)
  t.deepEqual(actual, expected)
})

test('checks if number is even and returns false', t => {
  const n = 27
  const expected = false
  const actual = isEven(n)
  t.deepEqual(actual, expected)
})
