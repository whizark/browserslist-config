'use strict';

module.exports = {
    production : [
        'last 1 Explorer major version',
        'last 2 Edge major versions',
        'last 2 Firefox major versions',
        'last 2 Chrome major versions',
        'last 2 Safari major versions',
        'last 2 Opera major versions',
        'Firefox ESR',
    ],
    development: [
        'latest 1 version',
        'not dead',
    ],
};
