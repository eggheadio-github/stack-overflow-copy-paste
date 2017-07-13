import test from 'ava'
import {alertMessage} from '../src'

test('Display alert message ', t => {
  const expected = true
  const actual = alertMessage()
  t.deepEqual(actual, expected)
})
