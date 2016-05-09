import test from 'ava'
import {sortArray} from '../src'

test('sort an array of strings ascending', t => {
  const original = ['apple','orange','peach','banana'];
  const expected = ['apple','banana','orange','peach'];
  const actual = sortArray(original,'asc')
  t.same(actual, expected);
});

test('sort an array of strings descending', t => {
  const original = ['apple','orange','peach','banana'];
  const expected = ['peach','orange','banana','apple'];
  const actual = snakeToCamel(original,'desc');
  t.same(actual, expected);
});
