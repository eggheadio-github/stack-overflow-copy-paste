import test from 'ava'
import {clone} from '../src'

test('Clone number', t => {
  const original = 1
  const cloned = clone(original)
  t.deepEqual(cloned, original)
})

test('Clone string', t => {
  const original = 'test string'
  const cloned = clone(original)
  t.deepEqual(cloned, original)
})

test('Clone array', t => {
  const original = [1, 2, 3]
  const cloned = clone(original)
  t.deepEqual(cloned, original)
})

test('Date', t => {
  const original = new Date()
  const cloned = clone(original)
  t.deepEqual(cloned.getTime(), original.getTime())
})

test('Clone object', t => {
  const original = {a: 'test', b: 'test'}
  const cloned = clone(original)
  t.deepEqual(cloned, original)
})

test('Clone object with prototype', t => {
  const original = {a: 'test'}
  Object.setPrototypeOf(original, {testprop: 4})
  const cloned = clone(original)
  t.deepEqual(cloned.testprop, original.testprop)
})

test('Clone function', t => {
  function original() {
    return 1
  }
  const cloned = clone(original)
  t.deepEqual(cloned(), original())
})

test('Clone Map', t => {
  const original = new Map([['key', 'test'], ['a', 'b']])
  const cloned = clone(original)
  t.deepEqual(cloned, original)
})


