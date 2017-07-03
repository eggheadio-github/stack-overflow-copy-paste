import test from 'ava'
import {isFunction} from '../src'

test('check a function', t => {
  const func = () => {}
  const expected = true
  const actual  = isFunction(func)
  t.deepEqual(actual, expected)
})

test('check an object', t => {
  const object = {}
  const expected = false
  const actual = isFunction(object)
  t.deepEqual(actual, expected)
})

test('check a string', t => {
  const string = 'string'
  const expected = false
  const actual = isFunction(string)
  t.deepEqual(actual, expected)
})

test('check a boolean', t=> {
  const boolean = true
  const expected = false
  const actual = isFunction(boolean)
  t.deepEqual(actual, expected)
})

test('check a number', t => {
  const number = 1
  const expected = false
  const actual = isFunction(number)
  t.deepEqual(actual, expected)
})