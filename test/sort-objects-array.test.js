import test from 'ava'
import {sortObjectsArray} from '../src'

test('sort an array of objects by ascending order', t => {
    const original = [
        {Name: "Name", Surname: "Surname"},
        {Name:"AAA", Surname:"ZZZ"},
        {Name: "Name", Surname: "AAA"}
    ]
    const expected = [
        {Name: "Name", Surname: "AAA"},
        {Name: "Name", Surname: "Surname"},
        {Name:"AAA", Surname:"ZZZ"}
    ]
    const actual = original.slice(0).sort(sortObjectsArray('Surname'))
    t.deepEqual(actual, expected)
})

test('sort an array of objects by descending order', t => {
    const original = [
        {Name: "Name", Surname: "Surname"},
        {Name:"AAA", Surname:"ZZZ"},
        {Name: "Name", Surname: "AAA"}
    ]
    const expected = [
        {Name:"AAA", Surname:"ZZZ"},
        {Name: "Name", Surname: "Surname"},
        {Name: "Name", Surname: "AAA"}
    ]
    const actual = original.slice(0).sort(sortObjectsArray('-Surname'))
    t.deepEqual(actual, expected)
})

test('will not sort the an array if the property doesn\'t exist', t => {
    const original = [
        {Name: "Name", Surname: "Surname"},
        {Name:"AAA", Surname:"ZZZ"},
        {Name: "Name", Surname: "AAA"}
    ]
    const actual = original.slice(0).sort(sortObjectsArray('Middle'))
    t.deepEqual(actual, original)
})

