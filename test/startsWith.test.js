import test from 'ava'
import {startsWith} from '../src'

test('check correct input', t => {
  const string = 'First PR'
  const head = 'Fir'
  const result = startsWith(string, head)
  t.true(result)
})

test('check wrong input', t => {
  const string = 'First PR'
  const head = 'Foo'
  const result = startsWith(string, head)
  t.false(result)
})
