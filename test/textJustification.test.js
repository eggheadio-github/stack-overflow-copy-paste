import test from 'ava'
import {textJustification} from '../src'

test('Text justification function', t => {
  const object = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.']
  const len = 16
  const expected = ['This    is    an', 'example  of text', 'justification.  ']
  const actual = textJustification(object, len)
  t.deepEqual(actual, expected)
})
