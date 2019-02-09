/**
 * Created by Ibrahim on 07/08/2017.
 */
import test from 'ava'
import {isNumeric} from '../src'

test('checks if expression is number and returns true', t => {
  const n = '5'
  const expected = true
  const actual = isNumeric(n)
  t.deepEqual(actual, expected)
})

test('checks if expression is number and returns false', t => {
  const n = 'hello'
  const expected = false
  const actual = isNumeric(n)
  t.deepEqual(actual, expected)
})
