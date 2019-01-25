export default inchesToMetric

const cmConversion = 2.54

const mapper = {
  cm: cmConversion,
  m: cmConversion / 100,
  mm: cmConversion * 10,
}

function inchesToMetric(value, unit = 'cm') {
  if (isNaN(value)) {
    throw new TypeError('First argument must be of type "number"')
  }

  if (value > 12 || value < 0) {
    throw new RangeError('Inches have to be between 0 and 12')
  }

  if (!mapper[unit]) {
    throw new Error('Can only convert inches to meters ("m"), centimeters ("cm"), or milimeters ("mm").')
  }

  return value * mapper[unit]
}
