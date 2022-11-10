//node TypeAliases.js

/*type Employee = {
    id: number,
    name: string,
    salary: number,
    phone: string
}

let emp1: Employee={
    id:1,
    name:'som',
    salary: 20000,
    phone: '095-xxxxx'
}
console.log(emp1);
emp1.name = 'mind';
emp1.salary = 50000;

console.log(emp1);*/

//Optional properties

/*type Employee = {
    id: number,
    name: string,
    salary: number,
    phone?: string
}

let emp1: Employee={
    id:1,
    name:'som',
    salary: 20000,
    phone: '095-xxxxx'
}
let emp2: Employee={
    id:1,
    name:'som',
    salary: 20000,
}
console.log(emp1,emp2);*/

//Readonly Modifier
/*type Employee = {
    readonly id: number,
    readonly name: string,
    salary: number,
    phone: string
}

let emp1: Employee={
    id:1,
    name:'som',
    salary: 20000,
    phone: '095-xxxxx'
}
console.log(emp1);
emp1.salary = 50000;
//emp1.id = 2; //err cannot assign id
//emp1.name = 'mind'; //err cannot assign name
console.log(emp1);*/


