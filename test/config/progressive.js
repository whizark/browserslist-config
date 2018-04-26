import test from 'ava';
import {progressive} from '../../config';

test('returns the progressive config', t => {
    const expected = {
        production : [
            'last 2 versions',
            'Firefox ESR',
            'not dead',
            '> 1%',
        ],
        development: [
            'latest 1 version',
            'not dead',
        ],
    };

    t.deepEqual(progressive, expected);
});
