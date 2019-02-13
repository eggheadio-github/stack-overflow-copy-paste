import test from 'ava'
import {dec2bin} from '../src'

test('string is not a number', t => {
  const original = 'five'
  const expected = 'NaN'
  const actual = dec2bin(original)
  t.deepEqual(actual, expected)
})

test('throws error if number is less than zero', t => {
  const original = '-123'
  //const actual = dec2bin(original)
  const error = t.throws(() => {
    dec2bin(original)
  }, RangeError)
  t.is(error.message, 'Input must be a positive integer')
})

test('outputs binary version as string', t => {
  const original = '1234'
  const expected = '10011010010'
  const actual = dec2bin(original)
  t.deepEqual(actual, expected)
})

