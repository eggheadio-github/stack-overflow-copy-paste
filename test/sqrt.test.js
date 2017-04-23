import test from 'ava'
import {sqrt} from '../src'

test('Square root of a number', t => {
  const number = 25
  const expected = 5
  const actual = sqrt(number)
  t.deepEqual(actual, expected)
})

