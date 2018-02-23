import test from 'ava'
import {removeFalsy} from '../src'

test('removes false from array', t => {
  const n = [false]
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('removes zero from array', t => {
  const n = [0]
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('removes empty string from array', t => {
  const n = ['']
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('removes null from array', t => {
  const n = [null]
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('removes undefined from array', t => {
  const n = [undefined]
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('removes NaN from array', t => {
  const n = [NaN]
  const expected = []
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})

test('maintains array order', t => {
  const n = [NaN, 1, 2, false, undefined, 3, 0, '', 4, 5, null]
  const expected = [1, 2, 3, 4, 5]
  const actual = removeFalsy(n)
  t.deepEqual(actual, expected)
})
