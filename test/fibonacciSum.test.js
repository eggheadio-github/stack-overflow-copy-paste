import test from 'ava'
import {fibonacciSum} from '../src'

test('valid number', t => {
  const num = 5
  const expected = 12
  const result = fibonacciSum(num)
  t.is(expected, result)
})

test('invalid number', t => {
  const num = -5
  const expected = 0
  const result = fibonacciSum(num)
  t.is(expected, result)
})

test('number in quotes', t => {
  const num = '10'
  const expected = 143
  const result = fibonacciSum(num)
  t.is(expected, result)
})

test('decimal number', t => {
  const num = 12.1
  const expected = 376
  const result = fibonacciSum(num)
  t.is(expected, result)
})
