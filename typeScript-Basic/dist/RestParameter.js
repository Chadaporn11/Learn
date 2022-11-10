"use strict";
//node RestParameter.js
//แบบเดิม
/*function total1(a:number,b:number):number{
    return a+b
}
function total2(a:number,b:number,c:number):number{
    return a+b+c
}
console.log(total1(100,200))
console.log(total2(100,200,300))*/
const total3 = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(total3(100, 200));
console.log(total3(100, 200, 300));
console.log(total3(100, 200, 300, 400));
console.log(total3(100, 200, 300, 400, 500));
