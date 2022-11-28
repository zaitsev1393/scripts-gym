"use strict";
exports.__esModule = true;
exports.performSequentially = void 0;
var performSequentially = function (sequence) {
    for (var x = sequence.length - 1; x >= 0; x--) {
        for (var y = x - 1; y >= 0; y--) {
            sequence[x].wait += sequence[y].wait;
        }
    }
    sequence.forEach(function (e) { return setTimeout(e.run, e.wait); });
};
exports.performSequentially = performSequentially;
