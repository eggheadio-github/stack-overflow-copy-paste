import test from 'ava'
import {lessThan} from '../src'

test('checks if num1 is less than num2', t => {
  const num1 = 1
  const num2 = 2
  const expected = true
  const actual = lessThan(num1, num2)
  t.deepEqual(actual, expected)
})
