import test from 'ava'
import {snakeToCamel} from '../src'

test('converts snake-case to camelCase', t => {
  const original = 'snake-case-string'
  const expected = 'snakeCaseString'
  const actual = snakeToCamel(original)
  t.deepEqual(actual, expected)
})

test('converts snake_case to camelCase', t => {
  const original = 'snake_case_string'
  const expected = 'snakeCaseString'
  const actual = snakeToCamel(original)
  t.deepEqual(actual, expected)
})
