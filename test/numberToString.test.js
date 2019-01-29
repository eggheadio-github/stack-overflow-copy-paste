import test from 'ava'
import {numberToString} from '../src'

test('Convert lowest allowed number to string', t => {
  const number = 1
  const stringNum = 'one'
  const actual = numberToString(number)
  t.deepEqual(actual, stringNum)
})

test('Convert high number like 214124124 to string', t => {
  const number = 214124124
  const stringNum = `two hundred fourteen million one hundred twenty four thousand one hundred twenty four`
  const actual = numberToString(number)
  t.deepEqual(actual, stringNum)
})

test('Convert 1000 to string', t => {
  const number = 1000
  const stringNum = `one thousand`
  const actual = numberToString(number)
  t.deepEqual(actual, stringNum)
})

test('Zero and negative numbers should return error message', t => {
  const actual = numberToString(0)
  const errorMessage = 'Number needs to be grater than 0 or less than 2^53-1.'
  t.deepEqual(actual, errorMessage)
})

test('Numbers greater than Number.MAX_SAFE_INTEGER should return error message', t => {
  const actual = numberToString(Number.MAX_SAFE_INTEGER + 1)
  const errorMessage = 'Number needs to be grater than 0 or less than 2^53-1.'
  t.deepEqual(actual, errorMessage)
})