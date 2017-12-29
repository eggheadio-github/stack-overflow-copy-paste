import test from 'ava'
import {median} from '../src'

test('accepts only typeof array param', t => {
    const array = {}
    const expected = `${array} is not an array.`
    const actual = median(array)
    t.deepEqual(actual, expected)
})

test('accepts only arrays with numeric items', t => {
    const array = ['hello', 'world', 5, false]
    const expected = `${array} contains non-numeric items.`
    const actual = median(array)
    t.deepEqual(actual, expected)
})

test('accepts only nonempty arrays', t => {
    const array = []
    const expected = `${array} has no items.`
    const actual = median(array)
    t.deepEqual(actual, expected)
})

test('finds the median of an array with odd number of items', t => {
    const array = [13, 2, 5]
    const expected = 5
    const actual = median(array)
    t.deepEqual(actual, expected)
})

test('finds the median of an array with even number of items', t => {
  const array = [9, 25, 4, 1]
  const expected = 6.5
  const actual = median(array)
  t.deepEqual(actual, expected)
})