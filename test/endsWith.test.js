import test from 'ava'
import {endsWith} from '../src'

test('ends with input', t => {
  const string = 'Brasilia'
  const input = 'lia'
  const result = endsWith(string, input)
  t.true(result)
})

test('does not end with input', t => {
  const string = 'Brazil'
  const input = 'USA'
  const result = endsWith(string, input)
  t.false(result)
})
