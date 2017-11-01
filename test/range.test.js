import test from 'ava'
import { range } from '../src'

test('creates an array of numbers from start up to end', t => {
  const expected = [1, 2, 3, 4]
  const actual = range(1, 5);
  t.deepEqual(actual, expected)
})

test('creates an array of numbers starting from zero given an implicit end', t => {
  const expected = [0, 1, 2, 3]
  const actual = range(4);
  t.deepEqual(actual, expected)
})

test('creates an array of numbers in given steps', t => {
  const expected = [0, 5, 10, 15]
  const actual = range(0, 20, 5);
  t.deepEqual(actual, expected)
})

test('creates an array of negative numbers given a negative step', t => {
  const expected = [0, -1, -2, -3]
  const actual = range(0, -4, -1);
  t.deepEqual(actual, expected)
})

test('creates an empty array with no parameters given', t => {
  const expected = []
  const actual = range();
  t.deepEqual(actual, expected)
})
