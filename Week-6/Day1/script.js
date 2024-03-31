/** SCOPING */

// {
//     let x = 5;
//     var x = 6;
//     console.log(x);
// }
// console.log('out scope =>', x);

// let x = 5;
// function y (){
//     let x = 6;
//     console.log(x);
// }
// y()
// console.log(x);


/** default parametrs */

// function sum(a = 1,b = 0) {
//     console.log(a + b);
// }

// sum(undefined, 3)

/** Conditional operator */
// let y;
// let x = 1

// if(x > 3){
//     y = true
// }else{
//     y = false
// }
// console.log(y);


// let y = x > 3 ? true :x == 1 ? 40 : false:
// console.log(y);

/** template string */

// let name = 'John'
// let lastName = 'Due'
// let greeting = 'Hello, ' + name
// console.log(greeting);

// let greeting2 = `Hello, ${name} ${lastName}`
// console.log(greeting2);

/** functions */

// const greeting = function(name){
//     return `Hello, ${name}`
// }

// console.log(greeting('mmm'));

/** arrow functions */

// const greeting = (name) => `Hello ${name}`;

// console.log(greeting(2));

/** nested function */

// function x(){
//     let a = 7
//     function y(){
//         return a
//     }
//     return y
// }

// let a = x()()
// console.log(a);

/** Curring  */

// const y = (a) => (b) => a*b

// let productVAT = y(1.17)
// console.log(productVAT(60));
// console.log(productVAT(100));

/** compose */

const sum2 = (num) => num * 2;
const sum = (num) => num + 1;

const x = (a,b) => (c) => a(b(c));

let result = x(sum2,sum)(6);
console.log(result);

/** by value vs. br reference */

let arr =[1,2,3]
let arr2 =  [...arr] // it is coping the arr, and create new
arr2[1] = 5
console.log(arr);
console.log(arr2);