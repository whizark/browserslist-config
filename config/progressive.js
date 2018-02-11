'use strict';

const usage = require('./stats').global;
const merge = require('../lib/merge');

const config = {
    production : [
        'last 2 versions',
        'Firefox ESR',
    ],
    development: [
        'latest 1 version',
    ],
};

module.exports = merge({}, config, usage);
