import test from 'ava';
import {progressive} from '../../config';

test('returns the progressive config', t => {
    const expected = {
        production : [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
        ],
        development: [
            'latest 1 version',
        ],
    };

    t.deepEqual(progressive, expected);
});
