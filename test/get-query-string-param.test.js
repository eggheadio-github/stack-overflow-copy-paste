import test from 'ava'
import {getQueryStringParam} from '../src'

const url = 'https://egghead.io/?utm_source=test&utm_medium=code&utm_campaign=contributing-to-open-source'

test('gets the given parameter', t => {
  const name = 'utm_campaign'
  const expected = 'contributing-to-open-source'
  const actual = getQueryStringParam(url, name)
  t.deepEqual(actual, expected)
})

test('returns an empty string if param does not exist', t => {
  const name = 'missing-thing'
  const expected = ''
  const actual = getQueryStringParam(url, name)
  t.deepEqual(actual, expected)
})
