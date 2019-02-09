import test from 'ava'
import {toPower} from '../src'

test('calculate base number to exponent ', t => {
  const number1 = 3
  const number2 = 4
  const expected = 3 ** 4
  const actual = toPower(number1, number2)
  t.deepEqual(actual, expected)
})

test('works for negative exponents ', t => {
  const number1 = 8
  const number2 = -2
  const expected = 8 ** -2
  const actual = toPower(number1, number2)
  t.deepEqual(actual, expected)
})

test('works for base 0 ', t => {
  const number1 = 0
  const number2 = 4
  const expected = 0 ** 4
  const actual = toPower(number1, number2)
  t.deepEqual(actual, expected)
})

test('works for exponent 0 ', t => {
  const number1 = 8
  const number2 = 0
  const expected = 8 ** 0
  const actual = toPower(number1, number2)
  t.deepEqual(actual, expected)
})
