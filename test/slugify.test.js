import test from 'ava'
import {slugify} from '../src'

test('slugifies a text', t => {
  const text = 'The world is spherical in shape'
  const expected = 'the-world-is-spherical-in-shape'
  const actual = slugify(text)
  t.deepEqual(actual, expected)
})

test('trims whitespaces and slugifies the text', t => {
  const text = '   The world is spherical in shape   '
  const expected = 'the-world-is-spherical-in-shape'
  const actual = slugify(text)
  t.deepEqual(actual, expected)
})

test('it converts extra dashes to single dash', t => {
  const text = 'The--world---is---- spherical-- in-- shape'
  const expected = 'the-world-is-spherical-in-shape'
  const actual = slugify(text)
  t.deepEqual(actual, expected)
})

test('removes all none word characters', t => {
  const text = 'The & world & is & spherical & in & shape'
  const expected = 'the-world-is-spherical-in-shape'
  const actual = slugify(text)
  t.deepEqual(actual, expected)
})

test('removes dashes at the start and end of text', t => {
  const text = '---The world is spherical in shape---'
  const expected = 'the-world-is-spherical-in-shape'
  const actual = slugify(text)
  t.deepEqual(actual, expected)
})
