import test from 'ava'
import {first} from '../src'

test('gets the first item from an array', t => {
  const array = [1, 2, 3]
  const lastItem = first(array)
  t.deepEqual(lastItem, 1)
})
