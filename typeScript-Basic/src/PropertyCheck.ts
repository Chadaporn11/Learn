//node PropertyCheck.js

function showDetail(data:{name:string,age:number}){
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`);
}
const person={
    name: 'som',
    age:22
}
showDetail(person);