import test from 'ava'
import {randomInteger} from '../src'

test('result shouldn\'t be lower than min number', t => {
  const min = 1
  const max = 10
  const result = randomInteger(min, max)
  t.false(result < min)
})

test('result shouldn\'t be greater than max number', t => {
  const min = 1
  const max = 10
  const result = randomInteger(min, max)
  t.false(result > max)
})
