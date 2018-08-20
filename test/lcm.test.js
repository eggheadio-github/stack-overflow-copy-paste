import test from 'ava'
import {lcm} from '../src'

test('Get lcm of two unequal integers', t => {
  const a = 8
  const b = 12
  const expected = 24
  const actual = lcm(a, b)
  t.deepEqual(actual, expected)
})

test('Get lcm of equal integers', t => {
  const a = 11
  const b = 11
  const expected = 11
  const actual = lcm(a, b)
  t.deepEqual(actual, expected)
})
