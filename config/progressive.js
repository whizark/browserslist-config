'use strict';

const usage = require('./stats').global;
const merge = require('../lib/merge');

const config = {
    production : [
        'last 2 versions',
        'Firefox ESR',
        'not dead',
    ],
    development: [
        'latest 1 version',
        'not dead',
    ],
};

module.exports = merge({}, config, usage);
