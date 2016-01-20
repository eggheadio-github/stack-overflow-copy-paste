import test from 'ava'
import snakeToCamel from '../src/snake-to-camel'

test('converts snake-case to camelCase', t => {
  const original = 'snake-case-string'
  const expected = 'snakeCaseString'
  const actual = snakeToCamel(original)
  t.same(actual, expected)
})

