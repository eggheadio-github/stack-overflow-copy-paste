import test from 'ava'
import {removeDuplicates} from '../src'

test('check array with duplicate strings', t => {
    const array = ['hello', 'world', 'world', 'array'];
    const expected = ['hello', 'world', 'array'];
    const actual = removeDuplicates(array);
    t.deepEqual(actual, expected);
})

test('check array with duplicate ints', t => {
    const array = [1, 2, 3, 4, 4, 5, 5, 4, 1, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const actual = removeDuplicates(array);
    t.deepEqual(actual, expected);
})

test('check array with no duplicates', t => {
    const array = [1, 3, 5, 7, 9];
    const expected = [1, 3, 5, 7, 9];
    const actual = removeDuplicates(array);
    t.deepEqual(actual, expected);
})