import test from 'ava'
import {objectValuesToString} from '../src'

test('returns a comma-separated string with all the object values', t => {
  const object = {
    id: 187,
    title: 'egghead.io is awesome',
    subtitle: 'Contribute on GitHub',
    author: 'Patata Patati',
  }
  const expected = '187, egghead.io is awesome, Contribute on GitHub, Patata Patati'
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: false', t => {
  const object = false
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: zero(Number)', t => {
  const object = 0
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: zero(String)', t => {
  const object = '0'
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: empty string', t => {
  const object = ''
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: null', t => {
  const object = null
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: undefined', t => {
  const object = undefined
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is falsy: NaN', t => {
  const object = NaN
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is not an object: function', t => {
  function object() {
    return 'JavaScript, ES6, Github!'
  }
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is not an object: number', t => {
  const object = 878565
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is not an object: string', t => {
  const object = 'This is a string'
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is not an object: boolean', t => {
  const object = true
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('returns an empty string if value in param is a Date', t => {
  const object = new Date()
  const expected = ''
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})

test('skips falsy object values excluding zero and false', t => {
  const object = {
    id: 0,
    position: '0',
    title: undefined,
    subtitle: 'JavaScript is magic',
    author: null,
    error: NaN,
    visible: false,
    otherProp: '',
  }
  const expected = '0, 0, JavaScript is magic, false'
  const actual = objectValuesToString(object)
  t.deepEqual(actual, expected)
})
