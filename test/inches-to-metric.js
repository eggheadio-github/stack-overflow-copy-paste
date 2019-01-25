import test from 'ava'
import {inchesToMetric} from './../src'

test('should throw error if a number is not passed', t => {
  t.throws(() => inchesToMetric('foo'))
})

test('should throw error if inches is out of range value', t => {
  t.throws(() => inchesToMetric(22))
  t.throws(() => inchesToMetric(-1))
})

test('should throw error if wrong metric value is passed', t => {
  t.throws(() => inchesToMetric(12, 'km'))
})

test('should convert inches to centimeters', t => {
  t.deepEqual(inchesToMetric(1), 2.54)
  t.deepEqual(inchesToMetric(10), 25.4)
})

test('should convert inches to meters', t => {
  t.deepEqual(inchesToMetric(1, 'm'), 0.0254)
  t.deepEqual(inchesToMetric(10, 'm'), 0.254)
})

test('should convert inches to milimeters', t => {
  t.deepEqual(inchesToMetric(1, 'mm'), 25.4)
  t.deepEqual(inchesToMetric(10, 'mm'), 254)
})
