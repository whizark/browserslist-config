import test from 'ava';
import index from '..';
import {conservative} from '../config';

test('should be the same as the conservative config', t => {
    t.deepEqual(index, conservative);
});
