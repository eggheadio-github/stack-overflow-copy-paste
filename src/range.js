export default range

/**
 * @module range
 * @description This method creates an array of numbers (positive and/or
 * negative) progressing from start up to, but not including, end.
 *
 * @param {Number} start - The start of the range
 * @param {Number} end - The end of the range
 * @param {Number} step - The value to increment or decrement by
 * @return {Array} - Returns an array of integers containing an arithmetic
 * progression
 * */

function range(start = 0, end, step = 1) {
  if (end === undefined) {
    end = start
    start = 0
  }

  const length = Math.max(Math.ceil((end - start) / step), 0)
  const rangeArr = Array(length)

  for (let idx = 0; idx < length; idx++, start += step) {
    rangeArr[idx] = start
  }

  return rangeArr
}
