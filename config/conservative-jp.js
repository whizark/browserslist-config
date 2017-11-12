'use strict';

const desktop = require('./desktop').conservative;
const mobile  = require('./mobile').conservative;
const usage   = require('./stats').jp;

module.exports = [].concat(desktop, mobile, usage);
