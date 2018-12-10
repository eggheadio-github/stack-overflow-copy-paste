import test from 'ava'
import {reduceCount} from '../src'

test('first param has to be an array', t => {
  const array = {}
  const expected = `${array} isn't an array.`
  const actual = reduceCount(array, 0)
  t.deepEqual(actual, expected)
})

test('array must have at least one value', t => {
  const array = []
  const expected = `${array} is empty.`
  const actual = reduceCount(array, 0)
  t.deepEqual(actual, expected)
})

test('array will count occurences of integer param', t => {
  const array = [1, 2, [1, 3], 4, 5, [1, 6, 7]]
  const expected = 3
  const actual = reduceCount(array, 1)
  t.deepEqual(actual, expected)
})

test('array will count occurences of string param', t => {
  const array = ['six', 2, [1, 'six'], 4, 5, [1, 'six', 7], 'six', 'sicks']
  const expected = 4
  const actual = reduceCount(array, 'six')
  t.deepEqual(actual, expected)
})

test('array will count occurences of float param', t => {
  const array = [1, 2, [1, 3], 4, 6.4, [1, 6.4, 7], 6.4, 6.5, 4.6]
  const expected = 3
  const actual = reduceCount(array, 6.4)
  t.deepEqual(actual, expected)
})
