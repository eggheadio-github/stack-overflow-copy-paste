import test from 'ava'
import {getTriangleType} from '../src'

test('gets the type of a triangle when Equilateral', t => {
  const a = 10
  const b = 10
  const c = 10
  const expected = 'Equilateral'
  const actual = getTriangleType(a, b, c)
  t.deepEqual(actual, expected)
})

test('gets the type of a triangle when Isosceles', t => {
  const a = 10
  const b = 20
  const c = 20
  const expected = 'Isosceles'
  const actual = getTriangleType(a, b, c)
  t.deepEqual(actual, expected)
})

test('gets the type of a triangle when Scalene', t => {
  const a = 10
  const b = 20
  const c = 30
  const expected = 'Scalene'
  const actual = getTriangleType(a, b, c)
  t.deepEqual(actual, expected)
})
