import test from 'ava'
import {makeObjectIterable} from '../src'

test('check if the iterator returns correct values ', t => {
  const myObj = {a: 1, b: 2, c: 'XKCD'}
  const out = makeObjectIterable(myObj)
  const a = []
  const b = []
  Object.keys(myObj).map(item => a.push(myObj[item]))
  for (const v of out) {
    b.push(v)
  }
  t.deepEqual(a, b)
})
