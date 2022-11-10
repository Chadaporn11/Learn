//node Array.js

//แบบปกติ
/*const user1:string = 'mind';
const user2:string = 'jorin';*/

//array
//#1
/*const users:string[]=[];
users.push('mind');
users.push('jorin');
//users.push(100);//err

console.log(users);
//#2
const user1:string[] = ['mind', 'jorin']
user1.push('taaom');
console.log(user1);*/

//การเข้าถึง array
/*const users:string[] = ['mind', 'jorin','taaom']

//#1
console.log(users.length)
console.log(users[2])
console.log(users[1]='hannah')

//#2
for(let i = 0; i < users.length; i++){
    console.log(`ลำดับที่ ${i+1} = ${users[i]}`)
}

//#3
users.forEach(element => {
    console.log(element)
});*/

//Array & TypeAliases
/*
type Employee={
    name:string,
    salary:number,
    department?:string
}

const employee:Employee[]=[]
employee.push({name:'som',salary:50000,department:'Developer'})
employee.push({name:'mind',salary:70000})
employee.push({name:'jorin',salary:100000,department:'Artist'})

console.log(employee)
console.log(employee[0])

employee.forEach(element => {
    console.log(element)
});

for(let person of employee) {
    console.log(person)
}*/