import test from 'ava'
import {hex2hsl} from '../src'

test('test red color', t => {
  const hex = '#ff0000'
  const expected = 'hsl(0, 100%, 50%)'
  const actual = hex2hsl(hex)
  t.deepEqual(actual, expected)
})

test('test green color', t => {
  const hex = '#00ff00'
  const expected = 'hsl(120, 100%, 50%)'
  const actual = hex2hsl(hex)
  t.deepEqual(actual, expected)
})

test('test blue color', t => {
  const hex = '#0000ff'
  const expected = 'hsl(240, 100%, 50%)'
  const actual = hex2hsl(hex)
  t.deepEqual(actual, expected)
})

test('test fabada color', t => {
  const hex = '#fabada'
  const expected = 'hsl(330, 86%, 85%)'
  const actual = hex2hsl(hex)
  t.deepEqual(actual, expected)
})

test('test black color', t => {
  const hex = '#000000'
  const expected = 'hsl(0, 0%, 0%)'
  const actual = hex2hsl(hex)
  t.deepEqual(actual, expected)
})
