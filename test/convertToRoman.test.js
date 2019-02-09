import test from 'ava'
import {convertToRoman} from '../src'

test('convert to roman numeral', t => {
  const object = 24
  const expected = 'XXIV'
  const actual = convertToRoman(object)
  t.deepEqual(actual, expected)
})
