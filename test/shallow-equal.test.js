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
  t.deepEqual(actual, expected)
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

  t.deepEqual(shallowEqual(a, b), shallowEqual(b, a))
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
  t.deepEqual(actual, expected)
})

test('Compares two inequal objects symmetrically', t => {
  const b = {
    a: 1,
    b: 2
  }

  const a = {
    a: 1,
    b: 3
  }

  t.deepEqual(shallowEqual(a, b), shallowEqual(b, a))
})

test('Compares only own properties of given objects', t => {
  function A() {
    this.a = 1
    this.b = 2
    this.c = 'test'
  }

  A.prototype.anotherProp = 12345

  const a = new A()
  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  const actual = shallowEqual(a, b)
  const expected = true
  t.deepEqual(actual, expected)
})

test('Compares only own properties of given objects symmetrically', t => {
  function A() {
    this.a = 1
    this.b = 2
    this.c = 'test'
  }

  A.prototype.anotherProp = 12345

  const a = new A()
  const b = {
    a: 1,
    b: 2,
    c: 'test'
  }

  t.deepEqual(shallowEqual(a, b), shallowEqual(b, a))
})

test('Returns true when the same object is compared to itself', t => {
  const a = {
    a: 1,
    b: 'test'
  }

  const actual = shallowEqual(a, a)
  const expected = true
  t.deepEqual(actual, expected)
})


test('Returns false when one of the objects is null', t => {
  const a = {
    a: 1,
    b: 'test'
  }

  const actual = shallowEqual(a, null)
  const expected = false
  t.deepEqual(actual, expected)
})