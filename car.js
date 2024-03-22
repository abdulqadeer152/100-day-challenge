"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carinfo(manufacturer, modelName, ...extraoption) {
    const carinfo2 = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraoption));
    return carinfo2;
}
;
let answer = carinfo('honda', 'civic', { colo: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
