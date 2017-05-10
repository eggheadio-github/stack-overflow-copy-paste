import test from 'ava'
import {shallowEqual} from '../src'

test('Compares two equal objects', t => {
  const a = {
    a: 1,
    b: 2,
    c: 'test'
  }

  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  const actual = shallowEqual(a, b)
  const expected = true
  t.is(actual, expected)
})

test('Compares two equal objects symmetrically', t => {
  const a = {
    a: 1,
    b: 2,
    c: 'test'
  }

  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  t.is(shallowEqual(a, b), shallowEqual(b, a))
})

test('Compares two inequal objects', t => {
  const a = {
    a: 1,
    b: 2
  }

  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  const actual = shallowEqual(a, b)
  const expected = false
  t.is(actual, expected)
})

test('Compares two inequal objects symmetrically', t => {
  const a = {
    a: 1,
    b: 2
  }

  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  t.is(shallowEqual(a, b), shallowEqual(b, a))
})