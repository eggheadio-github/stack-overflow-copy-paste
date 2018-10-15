import test from 'ava'
import {removeProperty} from '../src'

test('Remove a property from object', t => {
  const obj = {fname: 'foo', lname: 'bar'}
  const prop = 'lname'
  const expected = {fname: 'foo'}
  const actual = obj
  removeProperty(obj, prop)
  t.deepEqual(actual, expected)
})
