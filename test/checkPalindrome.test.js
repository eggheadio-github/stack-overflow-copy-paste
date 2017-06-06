import test from 'ava'
import {checkPalindrome} from '../src'

test('string is not a palindrome', t => {
  const object = 'hello world'
  const expected = false
  const actual = checkPalindrome(object)
  t.deepEqual(actual, expected)
})

test(' string is a palindrome', t => {
  const object = 'l/o1&&9_J$$J 9!1ol'
  const expected = true
  const actual = checkPalindrome(object)
  t.deepEqual(actual, expected)
})
