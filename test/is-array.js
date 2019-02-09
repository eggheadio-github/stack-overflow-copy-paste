import test from 'ava'
import {isArray} from '../src'

test('check an actual array of strings', t => {
  const object = ['one', 'two', 'three']
  const expected = true
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})

test('check a nested array', t => {
  const object = ['one', [2, 3, 4], 'three']
  const expected = true
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})

test('check a strings', t => {
  const object = 'hello world'
  const expected = false
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})

test('check a JSON object', t => {
  const object = {keyOne: 'value1', keyTwo: 'value2'}
  const expected = false
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})

test('check null', t => {
  const object = null
  const expected = false
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})

test('check undefined', t => {
  const object = undefined
  const expected = false
  const actual = isArray(object)
  t.deepEqual(actual, expected)
})
