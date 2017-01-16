import test from 'ava'
import {square} from '../src'

test('Square a number ', t => {
  const number = 3
  const expected = 3 * 3
  const actual = square(number)
  t.deepEqual(actual, expected)
})
