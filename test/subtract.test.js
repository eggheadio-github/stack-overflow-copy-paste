import test from 'ava'
import subtraction from '../src/subtraction'

test('Subtracts two integers ', t => {
  const number1 = 23
  const number2 = 3
  const expected = 23 - 3
  const actual = subtraction(number1, number2)
  t.deepEqual(actual, expected)
})
