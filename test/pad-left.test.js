import test from 'ava'
import {padLeft} from '../src'

test('pads left of the given string', t => {
  const original = '123'
  const expected = 'zz123'
  const padLength = 5
  const padWith = 'z'
  const actual = padLeft(original, padLength, padWith)
  t.same(actual, expected)
})

test('does not pad a string longer than the pad length', t => {
  const original = '1234'
  const expected = '1234'
  const padLength = 3
  const actual = padLeft(original, padLength)
  t.same(actual, expected)
})
