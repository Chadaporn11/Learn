"use strict";
//node Func.js
//void func
/*function sayHi():void{
    console.log('SayHi!');
}
sayHi();*/
//parameter func
/*function sayHi(name:string){
    console.log(`SayHi! ${name}`);
}
sayHi('som');*/
//return func
/*function getDiscount():number{
    return 500;
}
console.log(getDiscount());*/
//parameter & return func
/*function checkNumber(number:number):string{
    return number%2 ===0 ? "เลขคู่": "เลขคี่";
}
console.log(checkNumber(10));*/
//allow func
/*const checkNumber=(number:number):string =>{
    return number%2 ===0 ? "เลขคู่": "เลขคี่";
}
console.log(checkNumber(10));*/
//default parameter
/*function show(name:string, age:number=22){
    console.log(`ชื่อ: ${name}, อายุ:${age}`);
}
show('som',29);
show('som');*/
//object func
/*const person={
    name: 'som',
    age:22
}
const person2:{name:string,age:number}={name:'Mind',age:25};
const position: {lat:number,lng:number}={lat:10,lng:20}

function showDetail(data:{name:string,age:number}){
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)

}
//showDetail(person);

function randomPosition():{lat:number,long:number}{
    return {
        lat:Math.random(),
        long:Math.random()
    }
}
console.log(randomPosition());*/
