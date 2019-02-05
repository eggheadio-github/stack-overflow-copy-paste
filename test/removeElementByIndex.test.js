import test from 'ava'
import {removeElementByIndex} from '../src'

test('Removes index from an array', t => {
  const array = [1, 2, 3]
  const expected = [1, 3]
  const actual = removeElementByIndex(array, 1)

  t.deepEqual(actual, expected)
})
