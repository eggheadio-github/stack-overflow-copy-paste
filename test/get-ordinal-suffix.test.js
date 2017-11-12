import test from 'ava'
import {getOrdinalSuffix} from '../src'

test('appends st, nd, th ordinal suffix to first 10 numbers', t => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const expected = ['0th', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
  const actual = numbers.map(n => getOrdinalSuffix(n))
  t.deepEqual(actual, expected)
})

test('appends th ordinal suffix to second 10 numbers', t => {
  const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  const expected = ['10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th']
  const actual = numbers.map(n => getOrdinalSuffix(n))
  t.deepEqual(actual, expected)
})

test('appends st, nd, th ordinal suffix to third 10 numbers', t => {
  const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  const expected = ['20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th']
  const actual = numbers.map(n => getOrdinalSuffix(n))
  t.deepEqual(actual, expected)
})
