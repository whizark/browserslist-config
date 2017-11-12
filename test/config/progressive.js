import test from 'ava';
import progressive from '../../config/progressive';

test('returns the progressive config', t => {
    const expected = [
        'last 2 versions',
        'Firefox ESR',
        '> 1%',
    ];

    t.deepEqual(progressive, expected);
});
