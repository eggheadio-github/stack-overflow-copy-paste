import test from 'ava'
import {divide} from '../src'

test('divide two numbers ', t => {
  const number1 = 7
  const number2 = 2
  const expected = 7/2
  const actual = divide(number1, number2)
  t.deepEqual(actual, expected)
})
