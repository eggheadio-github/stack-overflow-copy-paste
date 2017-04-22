import test from 'ava'
import {initArray} from '../src'

test('inits an array with numbers', t => {
  const expected = [7, 7, 7, 7]
  const actual = initArray(4, 7)
  t.deepEqual(actual, expected)
})

test('inits an array with a string', t => {
  const expected = ['pepo', 'pepo', 'pepo', 'pepo']
  const actual = initArray(4, 'pepo')
  t.deepEqual(actual, expected)
})

test('fills an array with a boolean', t => {
  const expected = [false, false, false, false]
  const actual = initArray(4, false)
  t.deepEqual(actual, expected)
})

test.todo('allow for non-primitive values like objects, arrays, and dates')

