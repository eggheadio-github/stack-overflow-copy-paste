import test from 'ava'
import {timeDifference} from '../src'

test('time difference when startTime<endTime', t => {
  const startTime = '10:45'
  const endTime = '19:15'
  const expected = '08:30'
  const actual = timeDifference(startTime, endTime)
  t.is(actual, expected)
})

test('time difference when startTime>endTime', t => {
  const startTime = '13:40'
  const endTime = '09:43'
  const expected = '20:03'
  const actual = timeDifference(startTime, endTime)
  t.is(actual, expected)
})
