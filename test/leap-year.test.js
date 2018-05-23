import test from 'ava'
import leapYear from '../src/leap-year'

test('leap year is every 4 years to adjust about a day', t => {
  const year = 2016
  const expected = true
  const actual = leapYear(year)
  t.deepEqual(actual, expected)
})

test('Leap year is skipped every 100 years to remove an extra day', t => {
  const year = 1900
  const expected = false
  const actual = leapYear(year)
  t.deepEqual(actual, expected)
})

test('Leap year is reintroduced every 400 years to adjust another day', t => {
  const year = 2000
  const expected = true
  const actual = leapYear(year)
  t.deepEqual(actual, expected)
})

test('A year that is not a leap year', t => {
  const year = 1978
  const expected = false
  const actual = leapYear(year)
  t.deepEqual(actual, expected)
})
