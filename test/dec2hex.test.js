import test from 'ava'
import {dec2hex} from '../src'

test('Simple Conversion', t => {
  const number = 60
  const expected = '3c'
  const actual = dec2hex(number)
  t.deepEqual(actual, expected)
})
