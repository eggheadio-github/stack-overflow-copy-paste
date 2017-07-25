import test from 'ava'
import subtract from '../src/subtract'

test('Subtracts two integers ', t => {
  const number1 = 23
  const number2 = 3
  const expected = 23 - 3
  const actual = subtract(number1, number2)
  t.deepEqual(actual, expected)
})
