import test from 'ava'
import {hex2rgb} from '../src'

test('test hex without opacity value', t=>{
  const hex = '#ff0000'
  const expected = 'rgba(255,0,0)'
  const actual = hex2rgb(hex)
  t.deepEqual(actual, expected)
})

test('test hex with opacity value', t=>{
  const hex = '#ff0000'
  const opacity = 1
  const expected = 'rgba(255,0,0,1)'
  const actual = hex2rgb(hex,opacity)
  t.deepEqual(actual,expected)
})

test('test short hex without opacity value', t=>{
  const hex = '#f00'
  const expected = 'rgba(255,0,0)'
  const actual = hex2rgb(hex)
  t.deepEqual(actual, expected)
})
