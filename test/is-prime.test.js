import test from 'ava'
import {isPrime} from '../src'

test('check negative numbers -> -3', t => {
  const expected = false
  const actual = isPrime(-3)

  t.is(actual, expected)
})

test('check negative numbers -> -1', t => {
  const expected = false
  const actual = isPrime(-1)

  t.is(actual, expected)
})

test('check 0', t => {
  const expected = false
  const actual = isPrime(0)

  t.is(actual, expected)
})

test('check odd number greater than 2 -> 4', t => {
  const expected = false
  const actual = isPrime(4)

  t.is(actual, expected)
})

test('check prime numbers -> 1', t => {
  const expected = true
  const actual = isPrime(1)

  t.is(actual, expected)
})

test('check prime numbers -> 3', t => {
  const expected = true
  const actual = isPrime(3)

  t.is(actual, expected)
})
