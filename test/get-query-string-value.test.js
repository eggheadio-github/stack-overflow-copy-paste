import test from 'ava'
import {getQueryStringValue} from '../src'

const url = 'https://www.google.com/search?foo=bar&bar=&apple'

test('returns query string value of the given parameter', t => {
  const name = 'foo'
  const expected = 'bar'
  const actual = getQueryStringValue(name, url)
  t.deepEqual(actual, expected)
})

test('returns an empty string if parameter is present with empty value', t => {
  const name = 'bar'
  const expected = ''
  const actual = getQueryStringValue(name, url)
  t.deepEqual(actual, expected)
})

test('returns an empty string if parameter is present with no value', t => {
  const name = 'apple'
  const expected = ''
  const actual = getQueryStringValue(name, url)
  t.deepEqual(actual, expected)
})

test('returns null if parameter does not exist', t => {
  const name = 'pizza'
  const expected = null
  const actual = getQueryStringValue(name, url)
  t.deepEqual(actual, expected)
})
