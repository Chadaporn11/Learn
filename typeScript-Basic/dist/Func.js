"use strict";
//node Func.js
function total(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return parseInt(a) + parseInt(b);
    }
    throw new Error('Type error');
}
console.log(total(10, 20));
console.log(total('50', '60'));
