import test from 'ava'
import {max} from '../src'

test('find the maximum value of list', t => {
  const list = [ 22, 1, 99, 45 ]
  const result = max(list)
  t.deepEqual(99, result)
})
