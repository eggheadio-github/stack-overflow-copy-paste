import test from 'ava'
import {debounce} from '../src'

let counter = 0
function incr() {
  return counter++
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

test.beforeEach(t => {
  counter = 0
  t.is(counter, 0)
})

test('Throws error if first arg is not a function', t => {
  const error = t.throws(() => debounce('hello'), TypeError)
  t.is(error.message, 'Expected a function')
})

test('Should immediately return value', t => {
  const debounced = debounce(incr)

  debounced()
  t.is(counter, 1)
  debounced()
  t.is(counter, 2)
  debounced()
  t.is(counter, 3)
})

test.serial('Should resolve after 50ms', async t => {
  const wait = 50
  const debounced = debounce(incr, wait)

  debounced()
  t.is(counter, 0)
  debounced()
  t.is(counter, 0)

  await delay(wait + 1)
  t.is(counter, 1)
})

test.serial('Should resolve immediately', async t => {
  const wait = 50
  const debounced = debounce(incr, wait, true)

  debounced()
  t.is(counter, 1)
  debounced()
  t.is(counter, 1)

  await delay(wait + 1)
  debounced()
  t.is(counter, 2)
})
