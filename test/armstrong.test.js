import test from 'ava'
import {armstrong} from '../src'

test('This number is not an armstrong number', t => {
  const object = 123
  const expected = false
  const actual = armstrong(object)
  t.deepEqual(actual, expected)
})

test('This number is an armstrong number', t => {
  const object = 371
  const expected = true
  const actual = armstrong(object)
  t.deepEqual(actual, expected)
})
