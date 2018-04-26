import test from 'ava';
import {conservativeJp} from '../../config';

test('returns the conservative config in Japan', t => {
    const expected = {
        production : [
            'last 1 Explorer major version',
            'last 2 Edge major versions',
            'last 2 Firefox major versions',
            'last 2 Chrome major versions',
            'last 2 Safari major versions',
            'last 2 Opera major versions',
            'Firefox ESR',
            'last 2 iOS major versions',
            'last 1 Android major versions',
            'last 2 ChromeAndroid versions',
            'last 2 FirefoxAndroid versions',
            '> 1% in JP',
        ],
        development: [
            'latest 1 version',
            'not dead',
        ],
    };

    t.deepEqual(conservativeJp, expected);
});
