import test from 'ava'
import {round} from '../src'

test('Round to 0 places', t => {
  t.is(round(1.5, 0), 2)
})

test('Round to 1 places down', t => {
  t.is(round(1.54, 1), 1.5)
})

test('Round to 1 places up', t => {
  t.is(round(1.55, 1), 1.6)
})

test('Round to 2 places down', t => {
  t.is(round(100.334, 2), 100.33)
})

test('Round to 2 places up', t => {
  t.is(round(100.335, 2), 100.34)
})

test('Round negative number', t => {
  t.is(round(-123.4532, 1), -123.5)
})

test('Throws error if decimal places is negative', t => {
  const error = t.throws(() => {
    round(5.876, -1)
  })
  t.is(error.message, 'decimalPlaces cannot be negative')
})

