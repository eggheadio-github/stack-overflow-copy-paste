import test from 'ava'
import {contains} from '../src'

test('array contains element', t => {
  t.true(contains([1, 2, 3], 3))
})

test('array does not contain element', t => {
  t.false(contains([1, 2, 3], 4))
})
