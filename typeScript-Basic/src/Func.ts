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

//func overloading
//#1
/*function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown{
    if(!name){
        return 'Hello 1'
    }
    if(typeof name == 'string'){
        return 'Hello '+name
    }
    throw new Error('Type error')
}
console.log(sayHi())
console.log(sayHi('som'))*/
//#2
function total(a:number,b:number):number
function total(a:string,b:string):string
function total(a:unknown,b:unknown):unknown{
    if(typeof a == 'number' && typeof b == 'number'){
        return a+b
    }
    if(typeof a == 'string' && typeof b == 'string'){
        return parseInt(a)+parseInt(b)
    }
    throw new Error('Type error')
}

console.log(total(10,20))
console.log(total('50','60'))







