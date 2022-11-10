//node Tuple.js
//#1
//const point:[number,number]=[10,20]
//#2
/*const point:[x:number,y:number]=[10,20]

point[0] = 100
console.log(point)
console.log(point[0])
//#1
//const goodStatus:[number,string]=[200,'OK']
const badStatus:[code:number,status:string]=[400,'Error']

console.log(badStatus)*/

//สร้าง type แบบ Tuple
type HttpStatusCode=[number,string]

const goodStatus:HttpStatusCode=[200,'OK']
const notFound:HttpStatusCode=[404,'not found']
const badRequest:HttpStatusCode=[400,'Request failed']
const serverError:HttpStatusCode=[500,'Internal Server Error']

console.log(goodStatus)
console.log(notFound)
console.log(badRequest)
console.log(serverError)



