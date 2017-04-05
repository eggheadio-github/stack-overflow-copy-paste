import test from 'ava'
import {searchAndReplace} from '../src'

test('check the resultant string', t => {
    const str = 'the quick brown fox jumps over the lazy dog';
    const find = 'lazy';
    const replace = 'active';
    const expected = 'the quick brown fox jumps over the active dog';
    const actual = searchAndReplace(str, find, replace);
    t.deepEqual(actual, expected);
})
