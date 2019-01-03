import test from 'ava'
import {timeSince} from '../src'

test('Changes date to days ago format', t => {
  const aDay = 2 * 24 * 60 * 60 * 1000
  const expected = '2 days ago'
  const actual = timeSince(new Date(Date.now() - aDay))
  t.deepEqual(actual, expected)
})

test('Changes date to hours ago format', t => {
  const threeHours = 3 * 60 * 60 * 1000
  const expected = '3 hours ago'
  const actual = timeSince(new Date(Date.now() - threeHours))
  t.deepEqual(actual, expected)
})
  

test('Changes date to minute ago format', t => {
  const fourMinutes = 4 * 60 * 1000
  const expected = '4 minutes ago'
  const actual = timeSince(new Date(Date.now() - fourMinutes))
  t.deepEqual(actual, expected)
})

test('Changes date to seconds ago format', t => {
  const fiveSeconds = 5 * 1000
  const expected = '5 seconds ago'
  const actual = timeSince(new Date(Date.now() - fiveSeconds))
  t.deepEqual(actual, expected)
})
