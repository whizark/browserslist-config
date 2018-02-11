'use strict';

const desktop = require('./desktop').conservative;
const mobile  = require('./mobile').conservative;
const usage   = require('./stats').jp;
const merge   = require('../lib/merge');

module.exports = merge({}, desktop, mobile, usage);
