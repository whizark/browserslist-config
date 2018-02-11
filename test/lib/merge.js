import test from 'ava';
import merge from '../../lib/merge';

test('throws an error when undefined or null is passed', t => {
    t.throws(() => merge(undefined), TypeError, 'Cannot convert undefined or null to object.');
    t.throws(() => merge(null), TypeError, 'Cannot convert undefined or null to object.');
});

test('returns the merged config object', t => {
    const expected = {
        key1: [1, 2, 3, 4],
        key2: [3, 4, 5, 6],
        key3: [5, 6],
        key4: [7, 8],
    };

    const actual = merge(
        {},
        {
            key1: [1, 2],
            key2: [3, 4],
            key3: [5, 6],
        },
        {
            key1: [3, 4],
            key2: [3, 4, 5, 6],
            key4: [7, 8],
        }
    );

    t.deepEqual(actual, expected);
});
