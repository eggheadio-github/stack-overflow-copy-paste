import test from 'ava'
import {reverse} from '../src'

test('string with only letters', t => {
  const str = 'abcdefG'
  const expected = 'Gfedcba'
  const result = reverse(str)
  t.is(expected, result)
})

test('string with only numbers', t => {
  const str = '1234567890'
  const expected = '0987654321'
  const result = reverse(str)
  t.is(expected, result)
})

test('string with letters and special characters', t => {
  const str = 'abc!"§…'
  const expected = '…§"!cba'
  const result = reverse(str)
  t.is(expected, result)
})

test('string with only special characters', t => {
  const str = 'œ∑´®†'
  const expected = '†®´∑œ'
  const result = reverse(str)
  t.is(expected, result)
})
