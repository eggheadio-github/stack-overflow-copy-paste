import test from 'ava'
import {curry} from '../src'

test('Returns a curried version of the provided function', t => {
  function addOrConcat(one, two, three) {
    return one + two + three
  }
  const expected = addOrConcat('foo', 'bar', 'baz')
  const curried = curry(addOrConcat)
  const withFirstArg = curried('foo')
  const withSecondArg = withFirstArg('bar')
  const actual = withSecondArg('baz')
  t.deepEqual(actual, expected)
})
