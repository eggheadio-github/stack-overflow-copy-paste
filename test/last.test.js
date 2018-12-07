import test from 'ava'
import {last} from '../src'

test('gets the last item from an array', t => {
  const array = [1, 2, 3]
  const lastItem = last(array)
  const expected = 3
  t.deepEqual(lastItem, expected)
})
