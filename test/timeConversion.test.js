import test from 'ava'
import timeConversion from '../src/timeConversion'

test('returns the time in 24 hours format', time => {
    const timeGiven = "01:12:48AM"
    const expectedTime = "01:12:48"
    const actualTime = timeConversion(timeGiven);
    time.is(actualTime, expectedTime)
  })

  test('returns the time in 24 hours format', time => {
    const timeGiven = "06:48:56PM"
    const expectedTime = "18:48:56"
    const actualTime = timeConversion(timeGiven);
    time.is(actualTime, expectedTime)
  })  