import test from 'ava'
import {validateEmail} from '../src'


test('validate correct email', t => {
  const original = 'validate@email.com'
  const expected = true
  const actual = validateEmail(original)
  t.deepEqual(actual,expected)
})

test('validate wrong format', t => {
  const original = 'validateemail'
  const expected = false
  const actual = validateEmail(original)
  t.deepEqual(actual,expected)
})

test('validate wrong format with @', t => {
  const original = 'validate@'
  const expected = false
  const actual = validateEmail(original)
  t.deepEqual(actual,expected)
})
