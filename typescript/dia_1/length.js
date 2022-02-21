"use strict";
exports.__esModule = true;
exports.convert = void 0;
var convert = function (value, baseUnit, convertUnit) {
    var relation = {
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 0.001
    };
    var valueInMeters = value * relation[baseUnit];
    return valueInMeters / relation[convertUnit];
};
exports.convert = convert;
console.log((0, exports.convert)(437, 'cm', 'm'));
