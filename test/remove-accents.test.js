import test from 'ava'
import {removeAccents} from '../src'

test('remove accentuated characters', t => {
  const original = 'Español: Comí Crème Brulée el sábado'
  const expected = 'Espanol: Comi Creme Brulee el sabado'
  const actual = removeAccents(original)
  t.deepEqual(actual, expected)
})
