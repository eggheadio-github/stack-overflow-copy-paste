import test from 'ava'
import {isOdd} from '../src'

test('checks if number is odd and returns true', t => {
  const n = 27
  const expected = true
  const actual = isOdd(n)
  t.deepEqual(actual, expected)
})

test('checks if number is odd and returns false', t => {
  const n = 26
  const expected = false
  const actual = isOdd(n)
  t.deepEqual(actual, expected)
})
