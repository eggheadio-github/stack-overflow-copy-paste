import test from 'ava'
import {truncate} from '../src'

test('string truncates by the indicated length', t => {
  const toTrunc = 'This is a long sentence that needs to be truncated'
  const index = 15
  const expected = 'This is a long ...'
  const actual = truncate(toTrunc, index)
  t.deepEqual(actual, expected)
})

test('string does not truncate due to its small size', t => {
  const toTrunc = 'Short phrase'
  const index = 15
  const expected = 'Short phrase'
  const actual = truncate(toTrunc, index)
  t.deepEqual(actual, expected)
})
