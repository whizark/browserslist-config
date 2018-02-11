'use strict';

function merge(target) {
    if (typeof target === 'undefined' || target === null) {
        throw new TypeError('Cannot convert undefined or null to object.');
    }

    const to = Object(target);

    for (let i = 1, l = arguments.length; i < l; i++) {
        const nextSource = arguments[i];

        if (typeof nextSource === 'undefined' || nextSource === null) {
            continue;
        }

        for (let nextKey in nextSource) {
            if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                continue;
            }

            if (Object.prototype.hasOwnProperty.call(to, nextKey)) {
                to[nextKey] = [].concat(to[nextKey], nextSource[nextKey])
                    .filter(function (value, index, array) {
                        return array.indexOf(value) === index;
                    })
            } else {
                to[nextKey] = Array.prototype.slice.call(nextSource[nextKey]);
            }
        }
    }

    return to;
}

module.exports = merge;
