import test from 'ava'
import {revstring} from '../src'

test('string with only letters', t => {
  const str = 'abcdefG'
  const expected = 'Gfedcba'
  const result = revstring(str)
  t.is(expected, result)
})

test('string with letters and special characters', t => {
  const str = 'abc!"§'
  const expected = '§"!cba'
  const result = revstring(str)
  t.is(expected, result)
})
