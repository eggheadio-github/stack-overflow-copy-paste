import test from 'ava'
import {isPair} from '../src'

test('checks if number is pair and returns true', t => {
  const n = 20
  const expected = true
  const actual = isPair(n)
  t.deepEqual(actual, expected)
})

test('checks if number is pair and returns false', t => {
  const n = 25
  const expected = false
  const actual = isPair(n)
  t.deepEqual(actual, expected)
})
