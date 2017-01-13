import test from 'ava'
import {multiply} from '../src'

test('Multiplies two integers ', t => {
  const number1 = 23
  const number2 = 3
  const expected = 23 * 3
  const actual = multiply(number1, number2)
  t.deepEqual(actual, expected)
})
