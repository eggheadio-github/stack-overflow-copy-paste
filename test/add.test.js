import test from 'ava'
import {add} from '../src'

test('Adds two integers ', t => {
  const number1 = 23
  const number2 = 3
  const actual = 26
  const expected = add(number1, number2)
  t.deepEqual(actual, expected)
})
