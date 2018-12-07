import test from 'ava'
import {last} from '../src'

test('gets the last item from an array', t => {
  const array = [1, 2, 3]
  const lastItem = last(array)
  t.deepEqual(lastItem, 3)
})
