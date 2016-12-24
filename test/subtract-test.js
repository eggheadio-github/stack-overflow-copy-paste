import test from 'ava'
import {subtract} from '../src'

test('subtract two integers ', t => {
  const number1 = 30
  const number2 = 12
  const expected = 30 - 12
  const actual = subtract(number1, number2)
  t.deepEqual(actual, expected)
})
