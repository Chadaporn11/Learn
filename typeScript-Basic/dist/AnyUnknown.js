"use strict";
///node AnyUnknown.js
//Any & Unknown
function formatNumber(num) {
    return num.toFixed(2);
}
//any
/*let money:any = 50.123456;
money="50.123456"; // เพิ่มบรรทัดนี้จะไม่สามารถทำงานได้
console.log(formatNumber(money));*/
//unknown
let money = "50.123456";
money = 50.123456;
if (typeof money === "number") {
    console.log(formatNumber(money));
}
