/*console.log("Hello world!");

document.getElementById("text").innerHTML = "Chadaporn Thaikana";

document.write("Hello write");*/

//window.alert("Hello world!");

/*function ctoF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 +32;
    var message = cTemp + "\xB0C is " + cToFahr + "\xB0F";
    console.log (message);
}

ctoF(30);

function ftoC(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32 ) * 5 /9;
    var message = fTemp + "\xB0F is " + fToCel + "\xB0C";
    console.log (message);
}

ftoC(86);*/
// object properties values
// object จะให้ชื่อในการเข้าถึง properties
/*var person = {
    firstname: "Chadaporn",
    lastname: "Thaikana",
    eyeColor: "black",
    fullName: function(){
        return this.firstname + " " + this.lastname;
    }
};


console.log (person.fullName());*/

//event
/*function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}*/

/*var x = "Chadaporn \\ \"Som\" \\ \nThaikana";

console.log (x);*/

//Array
// Array จะใช้เลขในการเข้าถึง properties
//= Array Literals
/*var myArr = ["BMW",
    "Ford",
    "Honda"
];

console.log(myArr[0]);

//= Array Constructors
var myArr2 =  new Array("BMW","Ford","Honda");


console.log(myArr2);*/

//var fruits = ["banana","orange","apple","mango"];

//toSring(); => banana,orange,apple,mango
//document.getElementById("demo").innerHTML = fruits.toString();
//join(" - "); => banana - orange - apple - mango
//document.getElementById("demo").innerHTML = fruits.join(" - ");

//fruits.pop(); //['banana', 'orange', 'apple']
//fruits.push("kiwi"); //['banana', 'orange', 'apple', 'mango', 'kiwi']
//fruits.shift(); // ['orange', 'apple', 'mango']
//fruits.unshift("lemon"); //['lemon', 'banana', 'orange', 'apple', 'mango']
//fruits[0] = "kiwi"; //['kiwi', 'orange', 'apple', 'mango']
//delete fruits[0]; //[empty, 'orange', 'apple', 'mango']

//splice 2 = index push, 0 = index delete
//fruits.splice(2, 0, "lemon","kiwi"); //['banana', 'orange', 'lemon', 'kiwi', 'apple', 'mango']
//fruits.splice(0, 1); //['orange', 'apple', 'mango']
//console.log(fruits);

//= arr concat
//var arr1 = ["values1", "values2"];
//var arr2 = arr1.concat(["values3", "values4","values5"]);


//= arr slice
/*var arr1 = ["values1", "values2","values3", "values4","values5"];

var myNewArr = arr1.slice(1); //['values2', 'values3', 'values4', 'values5']
//slice index 1 to 3
var myNewArr1 = arr1.slice(1,3); //['values2', 'values3']*/

//= data type
// [ Primitive type ] เก็บข้อมูลได้ตัวเดียว
/*var myNum = 10; //Number
var myString = "Chadaporn"; //String
var myTrue = true; // Boolean
var myFalse = false; // Boolean
var myNull = null; // Null
var myundefined; // undefined

// [ Object type ] เก็บข้อมูลได้หลายตัว
var myobject = {}; // Object

//typeof ใช้เช็ค  data type*/
//= Math object
// Math.PI = 3.141592653589793
//Math.round(4.5); = 5
//Math.round(4.4); = 4.4
//Math.pow(5,5); = 3125
//Math.sqrt(64); = 8
//Math.abs(-4); = 4
//Math.ceil(4.5); = 5 ปัดขึ้น
//Math.floor(4.6); = 4 ปัดลง
//Math.random();

//= if else
/*var time = 10;
if(time<12){
    console.log("Good morning");
}else if(time < 18 ){
    console.log("Good afternoon");
}else{
    console.log("Good night");
}*/

//= switch
/*switch(new Date().getDay()){
   case 0:
       console.log("Sunday");
       break;
   case 1:
       console.log("Monday");
       break;
   case 2:
       console.log("Tuesday");
       break;
   case 3:
       console.log("Wednesday");
       break;
   case 4:
       console.log("Thursday");
       break;
   case 5:
       console.log("Friday");
       break;
   case 6:
       console.log("Saturday");
       break;
}*/

/*var myPhone = "Sumsung";
switch(myPhone){
   case "iPhone":
       console.log("30000");
       break;
   case "Sumsung":
       console.log("25000");
       break;
   default:
       console.log("We don't have phone");
}*/

//= for loop
/*var cars = ["BMW", "Ford", "Honda", "Audi"];

for(var i = 0; i <= cars.length; i++){
   console.log(cars[i]);
}*/

//= for in loop ใช้ในการ loop ผ่าน properties ของ object

/*var person = {
   fname: "Chadaporn",
   lname: "Thaikana",
   age: 21
}

for(var x in person) {
   console.log(person[x]);
}*/

//= for of ใช้ในการ loop ผ่านค่า object

/*var cars = ["BMW", "Ford", "Honda"];

for (var x of cars){
   console.log(x);
}*/

/*var myString ="JavaScript";

for(var y of myString){
   console.log(y);
}*/


// == type conversion การเเปลง data
//===Note!===//
/*
JavaScript data type

In JavaScript there are 5 different types that can contain values:

- string
- number
- boolean
- object
- function

There are 6 type of objects:

- Object
- Date
- Array
- String
- Nubmber
- Boolean

And data type that cannot contain values:

- null
- undefined
*/
// === ===//

//= scope

// local scope 
/*function myFunc(){
    var myName = "Chadaporn";
}

myFunc();

console.log(myName);*/

//= global scope
/*var mycar = 'BMW';

function myFunc(){
    myName = "Chadaporn"; //global scope
    console.log(mycar);
}

myFunc();
console.log(mycar);*/

//= JavaScript Hoisting

/*x = 5;
console.log(y); //undefined
console.log(x); //5


var x; // declaration // Hoisting

var y = 10; // Initialization // not Hoisting
*/

//= strict mode โหมดซีเรียส
/*"use strict";

x =5;
var x = 5;
function myFunc(){
    y = 10;
    var y = 20;
}
myFunc();
*/

// dist keywords
/*var person = {
    firstname: "Chadaporn",
    lastname: "lastname",
    fullName: function(){
        return person.firstname + " " + person.lastname;
    }
}
console.log(person.fullName());*/

//console.log(this);
/*
function myFunc(){
    return this;
}
console.log(myFunc());
*/

//= values let const javascript(ES6) ver6

/*var x =5;
var x =6; // not error

console.log(x);

let y = 6;
//let y = 7; //error
y= 10;
console.log(y);

const z=10;
z= 20; // cannot change data in values
console.log(z);*/

// scope

/*{
    var x =10;
}
console.log(x);//not error
{
    let y = 20;
    const z=10;
}
console.log(y,z);// error
*/

/*var x=10;
{
    var x=5;
}
console.log(x); //=5
let y= 10;
const z=30;
{
    let y= 5;
    const z = 50;
}
console.log(y,z); //=10 30 global scope
*/

//= templates string
/*var myname = "Chadaporn";
console.log("Hello My name is " + myname+" nice to meet you.");
console.log(`Hello My name is ${myname} nice to meet you.`);

function myName(name){
    console.log(`Hi my name is ${name}`);
}
myName('Som');
*/

//= Arrow function (ES6)

//Function Expressions
/*var hello = function(){
    return "Hello world";
}

//= Express to Arrow function
var hello1 = () =>"Hello world01";

console.log(hello());
console.log(hello1());

//= Arrow function with parameters

var hello2 = (value) =>"Hello "+ value;
//var hello2 = value =>"Hello "+ value;

console.log(hello2("som"));
//Function Declarations
/*function bye(){
    return "Bye bye";
}*/

//== ES6: 2015 Class
/*class myClass{
    constructor(name){ // properties in method constructor
        this.myname = name;
    }

    fullname(x){
        return x +" My name is " + this.myname;
    }
}

var person = new myClass("Chadaporn"); //เรียกใช้งาน class
console.log(person.fullname("Hi"));
*/

//= static method
/*class myClass{
    constructor(name){ // properties in method constructor
        this.myname = name;
    }

    fullname(x){
        return x +" My name is " + this.myname;
    }
    static hello(name){
        return "Hello! "+name;
    }
}

var person = new myClass("Chadaporn"); //เรียกใช้งาน class
console.log(person.fullname("Hi"));
//console.log(person.hello()); // error
console.log(myClass.hello("Mind")); // error
*/

//= การสืบทอด
/*class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "I have a  "+ this.carname;
    }
}

class Model extends Car {
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return this.present() + " , it's a " + this.model;
    }
}

var myCar = new Model("Ford", "Mustang");
console.log(myCar.show());*/

// style guide javascript
/*var firstname = "Chadaporn"; //camelCase

var x = y + z;
var myCar = ["value1", "value2", "value3"];

var person = {
    firstname: "Chadaporn",
    lastname: "Thaikana",
    eyeColor: "black"
};

var i;

for (i = 0; i < 10; i++) {
    console.log(i);
}

var time = 5;

if(time < 20){
    console.log("Good Day");
}else{
    console.log("Good evening");
}
*/