import test from 'ava'
import {object-to-arraylist} from '../src'

test('Convert object to arraylist example 1', t => {
    var obj1 = { name: 'Holly', age: 35, role: 'producer' };

	const expected = [['name', 'Holly'], ['age' , 35], ['role', 'producer' ]];
	const actual = convertObj(obj1)
	
	t.deepEqual(actual, expected)
})

test('Convert object to arraylist example 2', t => {
	var obj2 = { species: 'canine', name: 'Bowser', weight: '45'};

	const expected = ['species', 'canine'], ['name', 'Bowser'], ['weight', 45]] 
	const actual = convertObj(obj1)
	
	t.deepEqual(actual, expected)
})
