import test from 'ava'
import {reducer} from '../src'

test('tallies an array into object with count on each', t => {
  const initialvalue = {}
  const original = ["angular", "angular", "rails", "angular", "Python", "angular", "Python", "angular", "Vanilla"]
  const expected = {"Python": 2, "Vanilla": 1, "angular": 5, "rails": 1}
  const actual = reducer(array, vote)
  const answer = original.reduce(actual, initialvalue)
  t.deepEqual(actual, expected)
})