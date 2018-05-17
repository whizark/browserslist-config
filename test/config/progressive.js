import test from 'ava';
import {progressive} from '../../config';

test('returns the progressive config', t => {
    const expected = {
        production : [
            '> 0.5%',
            'last 2 versions',
            'Firefox ESR',
            'not dead',
        ],
        development: [
            'last 1 version',
            'not dead',
        ],
    };

    t.deepEqual(progressive, expected);
});
