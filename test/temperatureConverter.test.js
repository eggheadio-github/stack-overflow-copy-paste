import test from 'ava'
import {temperatureConverter} from '../src'

test('converts temperature', t => {
  const number = 78
  const expected = (number - 32) * 5/9
  const actual = temperatureConverter(number)
  t.is(actual, expected)

})