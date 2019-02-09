import test from 'ava'
import {getObjectSize} from '../src'

test('returns zero for empty object', t => {
  const testObject = {}
  const expected = 0
  const actual = getObjectSize(testObject)
  t.deepEqual(actual, expected)
})
test('returns 5 for object with 5 keys', t => {
  const testObject = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3',
    prop4: 'prop4',
    prop5: 'prop5',
  }
  const expected = 5
  const actual = getObjectSize(testObject)
  t.deepEqual(actual, expected)
})
test('returns size of empty array', t => {
  const testArray = []
  const expected = 0
  const actual = getObjectSize(testArray)
  t.deepEqual(actual, expected)
})
test('returns size of array with items', t => {
  const testArray = ['test', 'test2']
  const expected = 2
  const actual = getObjectSize(testArray)
  t.deepEqual(actual, expected)
})

