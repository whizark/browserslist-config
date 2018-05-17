import test from 'ava';
import {conservative} from '../../config';

test('returns the conservative config', t => {
    const expected = {
        production : [
            '> 1%',
            'last 1 Explorer major version',
            'last 2 Edge major versions',
            'last 2 Firefox major versions',
            'last 2 Chrome major versions',
            'last 2 Safari major versions',
            'last 2 Opera major versions',
            'Firefox ESR',
            'last 2 iOS major versions',
            'last 1 Android major versions',
            'last 2 ChromeAndroid major versions',
            'last 2 FirefoxAndroid major versions',
        ],
        development: [
            'last 1 version',
            'not dead',
        ],
    };

    t.deepEqual(conservative, expected);
});
