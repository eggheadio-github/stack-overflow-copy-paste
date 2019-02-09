import test from 'ava'
import {cube} from '../src'

test('Cube a number ', t => {
  const number = 5
  const expected = 5 * 5 * 5
  const actual = cube(number)
  t.deepEqual(actual, expected)
})
