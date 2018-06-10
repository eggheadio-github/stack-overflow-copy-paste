import test from 'ava'
import {generatePassword} from '../src'

test('returns a string', t => {
  const expected = 'string'
  const actual = typeof generatePassword(10)
  t.deepEqual(actual, expected)
})

test('returns an empty string', t => {
  const expected = ''
  const actual = generatePassword(0, 0, 0, 0, 0)
  t.deepEqual(actual, expected)
})

test('Returns a password of the correct length', t => {
  const expected = 10
  const actual = generatePassword(10).length
  t.deepEqual(actual, expected)
})

test('Returns a password of the default length', t => {
  const expected = 8
  const actual = generatePassword().length
  t.deepEqual(actual, expected)
})

test('Returns a password with CAPITALS', t => {
  const expected = 'X'
  const regex = /[A-Z]{10}/
  const actual = generatePassword(10, 10, 0, 0, 0).replace(regex, 'X')
  t.deepEqual(actual, expected)
})

test('Returns a password with lowercase', t => {
  const expected = 'X'
  const regex = /[a-z]{10}/
  const actual = generatePassword(10, 0, 10, 0, 0).replace(regex, 'X')
  t.deepEqual(actual, expected)
})

test('Returns a password with digits', t => {
  const expected = 'X'
  const regex = /[0-9]{10}/
  const actual = generatePassword(10, 0, 0, 0, 10).replace(regex, 'X')
  t.deepEqual(actual, expected)
})

test('Returns a password with specialchars', t => {
  const expected = 'X'
  const regex = /[!@#$%^&*()_+{}:"<>?\\|\[\];',./`~]{10}/
  const actual = generatePassword(10, 0, 0, 10, 0).replace(regex, 'X')
  t.deepEqual(actual, expected)
})
