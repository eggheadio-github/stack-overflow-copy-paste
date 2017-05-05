import test from 'ava'
import {mod} from '../src'

test('a dividend larger than divisor', t => {
  const dividend = 12
  const divisor = 8
  const expected = 4
  const result = mod(dividend, divisor)
  t.is(expected, result)
})

test('a negative dividend', t => {
  const dividend = -12
  const divisor = 8
  const expected = 4
  const result = mod(dividend, divisor)
  t.is(expected, result)
})
