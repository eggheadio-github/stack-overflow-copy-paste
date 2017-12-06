import test from 'ava'
import { find } from '../src'

test('find returns undefined if the input is not an instance of Array', t => {
  const original = { prop: 'test' }
  const predicate = element => 'does nothing'
  const expected = undefined
  const actual = find(original, element => predicate(element))
  t.deepEqual(actual, expected)
})

test('find returns the first element that matches the given predicate', t => {
  const original = [{ a: 1, b: 2 }, { c: 3 }, { a: 1, c: 4 }]
  const predicate = element => element.a === 1
  const expected = { a: 1, b: 2 }
  const actual = find(original, element => predicate(element))
  t.deepEqual(actual, expected)
})

test('find returns undefined if nothing matches the given predicate', t => {
  const original = [{ a: 1, b: 2 }, { c: 3 }, { a: 1, c: 4 }]
  const predicate = element => element.d === 1
  const expected = undefined
  const actual = find(original, element => predicate(element))
  t.deepEqual(actual, expected)
})
