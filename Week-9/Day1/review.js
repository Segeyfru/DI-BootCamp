// /**  CLASS */

// class nameOfClass{
//     constructor(){
//          this.x = 5;
//     }
//     getX(){
//         return this.x;
//     }
//     setX(num){
//         this.x = num;
//     }
// }

// const a = new nameOfClass();

// console.log(a.getX());

// class SubOfNameOfClass extends NameOfClass{
//     constructor() {
//         super()
//         this.y = 6;
//     }
// }

// /** ARROW FUNCTION */

// const sum = (x,y)=>{
//     return x + y
// }

// /** OBJECT */

// let obj = {
//     name:'John',
//     age:26,
// }

// obj.name;
// obj["name"];

// // const {name, age} = obj


// let name = 'Jack';
// let email = 'jack@mail.com'

// const user = {name,email}

// function getUser(props){
//     const  {name,email} = props
//     console.log( name,email);
// }

// getUser(user)

// /** ARRAY */

// let arr = [1,2,3,4]

// const [a,b] = arr;

// const newArr = arr.map((item, index) =>{
//     return item * index
// })

// /** PROMISE */

// /**
//  pending
//  fullfiled - resolve
//  rejct
//  */

// const newPromise = new Promise (res,rej)  {

// }
// async function x(){
//     throw new Error('nothing to be return')
// }

// let option = {
//     method:"GET", //POST, PUT, DELETE, PATCH...
//     headers:{
//         'Content-Type':'application/json',
//         'x-access-key':'874665sfd845d'
//     },
//     body: JSON.stringify({...})
// }

let arr = [1];
let arr2 = [...arr];

let obj = {x:1}
let obj1 = {...obj, y:4}


let y = x === 5? 8 : 9;
