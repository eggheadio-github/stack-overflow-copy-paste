import test from 'ava'
import {ageCalculator} from '../src'

test('Check for correct results', t => {
	const dateString = "08/04/1997"
	const expected_age = 20
	const actual_age = age_calculator(dateString)
	t.deepEqual(expected_age,actual_age)
})

test('Invalid date to check validation', t => {
	const dateString = "08/15/1997"
	const expected_age = 20
	const actual_age = age_calculator(dateString)
	t.deepEqual(expected_age,actual_age)
})

test('Invalid date to check validation pattern', t => {
	const dateString = "08/1/199"
	const expected_age = 20
	const actual_age = age_calculator(dateString)
	t.deepEqual(expected_age,actual_age)
})