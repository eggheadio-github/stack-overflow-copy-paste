import test from 'ava'
import {isNullOrWhitespace} from '../src'

test('check undefined', t => {
  const expected = true
  const actual = isNullOrWhitespace(undefined)
  t.deepEqual(actual, expected)
})

test('check null', t => {
  const expected = true
  const actual = isNullOrWhitespace(null)
  t.deepEqual(actual, expected)
})

test('check an empty string', t => {
  const expected = true
  const actual = isNullOrWhitespace('')
  t.deepEqual(actual, expected)
})

test('check a string of whitespace', t => {
  const expected = true
  const actual = isNullOrWhitespace('  ')
  t.deepEqual(actual, expected)
})

test('check a string with characters', t => {
  const expected = false
  const actual = isNullOrWhitespace('hello world')
  t.deepEqual(actual, expected)
})

