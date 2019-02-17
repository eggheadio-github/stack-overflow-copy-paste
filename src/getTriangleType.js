export default getTriangleType

/**
 * Original Source: https://stackoverflow.com/questions/12491976
 *
 * This function will return the type of a triangle, given its sides (a, b, c) length. It's a copy.
 *
 * @param {String} a - The sides to determine which triangle it belongs to
 * @param {String} b - The sides to determine which triangle it belongs to
 * @param {String} c - The sides to determine which triangle it belongs to
 * @return {String} (Equilateral, Isosceles and Scalene) - The type of triangle
 */
function getTriangleType(a, b, c) {
  return (
    (a === b && b === c && 'Equilateral') ||
    ((a === b || a === c || b === c) && 'Isosceles') ||
    'Scalene'
  )
}
