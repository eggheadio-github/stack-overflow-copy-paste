import test from 'ava'
import {dec2bin} from '../src'

test('string is not a number', t => {
  const original = 'five'
  const expected = 'NaN'
  const actual = dec2bin(original)
  t.deepEqual(actual, expected)
})

test('number is less than zero', t => {
  const original = '-123'
  const expected = 'Only works for positive integers'
  const actual = dec2bin(original)
  t.deepEqual(actual, expected)
})

test('outputs binary version as string', t => {
  const original = '1234'
  const expected = '10011010010'
  const actual = dec2bin(original)
  t.deepEqual(actual, expected)
})

