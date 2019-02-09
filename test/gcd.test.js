import test from 'ava'
import {gcd} from '../src'

test('Get gcd for two integers', t => {
  const a = 4
  const b = 64
  const expected = 4
  const actual = gcd(a, b)
  t.deepEqual(actual, expected)
})
