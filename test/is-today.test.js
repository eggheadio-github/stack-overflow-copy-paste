import test from 'ava'
import {isToday} from '../src'

test('check today', t => {
    const expected = true;
    const actual = isToday(new Date());

    t.is(actual, expected);
});

test('check previous date', t => {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));

    const expected = false;
    const actual = isToday(yesterday);

    t.is(actual, expected);
});

test('check future date', t => {
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1));

    const expected = false;
    const actual = isToday(tomorrow);

    t.is(actual, expected);
});

test('check wrong parameter', t => {
    const expected = false;
    const actual = isToday('dummy');

    t.is(actual, expected);
})