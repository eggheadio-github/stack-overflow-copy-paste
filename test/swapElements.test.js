/**
 * Created by HP on 3/1/2018.
 */
import test from 'ava'
import {swapElements} from '../src'

test('should swap two elements at given indexes in the targeted array', t => {
  const target = [1, 2, 3]
  swapElements(1, 2, target)
  t.deepEqual(target, [1, 3, 2])
})
