'use strict';

const desktop = require('./desktop').conservative;
const mobile  = require('./mobile').conservative;
const usage   = require('./stats').global;
const merge   = require('../lib/merge');

module.exports = merge({}, usage, desktop, mobile);
