import test from 'ava'
import {largest} from '../src'

test('gets largest number from array', t => {
  const array = [23, 45, 25, 67, 24, 86, 12, 94, 37]
  const largestItem = largest(array)
  t.deepEqual(largestItem, 94)
})

test('return null in case of empty array', t => {
  const array = []
  const largestItem = largest(array)
  t.deepEqual(largestItem, null)
})
