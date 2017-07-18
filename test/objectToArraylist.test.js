import test from 'ava'
import {convertObj} from '../src'

test('Convert object to arraylist example one', t => {
  const obj1 = { name: 'Holly', age: 35, role: 'producer' }
  const expected = [ [ 'name', 'Holly' ], [ 'age' , 35 ], [ 'role', 'producer' ] ]
  const actual = convertObj(obj1)
  t.deepEqual(actual, expected)
})

test('Convert object to arraylist example two', t => {
  const obj2 = { species: 'canine', name: 'Bowser', weight: 45}
  const expected = [ [ 'species', 'canine' ], [ 'name', 'Bowser' ], [ 'weight', 45 ] ] 
  const actual = convertObj(obj2)
  t.deepEqual(actual, expected)
})
