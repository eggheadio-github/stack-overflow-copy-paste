import test from 'ava'
import {occurrences} from '../src'

test('empty substring', t => {
  t.deepEqual(occurrences('', ''), 1)
  t.deepEqual(occurrences('abc', ''), 4)
})

test('single occurences', t => {
  t.deepEqual(occurrences('foo', 'foo'), 1)
  t.deepEqual(occurrences('blahfooblah', 'foo'), 1)
  t.deepEqual(occurrences('foo', 'f'), 1)
})

test('multiple occurrences', t => {
  t.deepEqual(occurrences('foofoofoofoo', 'foo'), 4)
  t.deepEqual(occurrences('foofoofoofoo', 'foofoo'), 2)
  t.deepEqual(occurrences('blafooblahfooblah', 'foo'), 2)
  t.deepEqual(occurrences('foofoofooooofo', 'foo'), 3)
})

test('no occurrences', t => {
  t.deepEqual(occurrences('', 'foo'), 0)
  t.deepEqual(occurrences('abc', 'foo'), 0)
  t.deepEqual(occurrences('boo', 'foo'), 0)
})

test('overlap', t => {
  t.deepEqual(occurrences('', '', true), 1)
  t.deepEqual(occurrences('abc', '', true), 4)
  t.deepEqual(occurrences('foofoofoofoo', 'foofoo', true), 3)
  t.deepEqual(occurrences('blafooblahfooblah', 'foo', true), 2)
  t.deepEqual(occurrences('foofoofooooofo', 'foo', true), 3)
})

test('overlap no occurrences', t => {
  t.deepEqual(occurrences('', 'foo', true), 0)
  t.deepEqual(occurrences('abc', 'foo', true), 0)
  t.deepEqual(occurrences('boo', 'foo', true), 0)
  t.deepEqual(occurrences('fooofooofooofoo', 'foofoo', true), 0)
  t.deepEqual(occurrences('blafobooblahfoboblah', 'foo', true), 0)
  t.deepEqual(occurrences('fofofofaooooofo', 'foo', true), 0)
})
