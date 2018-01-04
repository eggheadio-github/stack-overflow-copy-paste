import test from 'ava'
import {capitalizeFirstLetter} from '../src'

test('capitalize first letter', t => {
  const original = 'oyinkan'
  const expected = 'Oyinkan'
  const actual = capitalizeFirstLetter(original)
  t.deepEqual(actual, expected)
})
