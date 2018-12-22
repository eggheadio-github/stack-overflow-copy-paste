import test from 'ava'
import {BitwiseAnd} from '../src'

test('Returns the Bitwise And of all the Array Elements', t => {
  const name1=[1,3,5]
 const actual = BitwiseAnd(name1)
  const expected=1
  t.deepEqual(actual, expected)
})


