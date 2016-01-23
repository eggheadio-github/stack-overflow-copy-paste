import test from 'ava'
import padLeft from '../src/pad-left'

test('pads a string', t => {
  const original = '123'
  const expected = '00123'
  const actual = padLeft(original, 5, 0)
  t.same(actual, expected)
})
