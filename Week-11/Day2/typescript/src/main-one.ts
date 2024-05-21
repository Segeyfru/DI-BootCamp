// // type alias 


// type StrOrNum = string | number | boolean
// type StrOrNumArray = (string | number)[]


// type Student = {
//     name: string,
//     age: number,
//     isGood: StrOrNum
// }


// type User = {
//     name: string;
//     isGood: StrOrNum
// }


// // type literal


// type Name = 'John' | 'Jane' | 'Jack'

// type Status = 'success' | 'error' | 'failed'

// let userStatus: Status = 'failed'

// // function return

// // const add = (a: number, b: number | string): number => {
// //     // type guard
// //     if (typeof b === 'string') {
// //         return -1
// //     }
// //     return a + b
// // }



// // function overload

// // function add(a: number, b: number): number;
// // function add(a: string, b: string): string;

// // function add(a: any, b: any): any { //here "any" would be  OR string OR number 
// //     return a + b
// // }

// // console.log(add(2,3));
// // console.log(add('3','4'));
// // // console.log(add('3',1));

// // function not return value

// const greet = (name: string): void => {
//     console.log(`Hello ${name}`);
// }
// greet('Jack')


// type addFunc = (a: number, b: number) => number

// const add: addFunc = (a, b) => {
//     return a + b
// }
// const addVAT: addFunc = (a, b) => {
//     return a + b * 0.7
// }

// // optional paremeter
// const addOptional = (a: number, b?: number): number => {
//     return a + (b || 0)
// }

// // Default paremeter
// const addDefault = (a: number, b: number = 0): number => {
//     return a + b
// }

// console.log(addOptional(2));
// console.log(addOptional(2, 3));

// console.log(addDefault(2, 10));
// console.log(addDefault(2));


// // rest parameter
// const addRest = (a: number, ...rest: number[]): number => {
//     return rest.reduce((acc, val) => acc + val, a)
//     console.log(rest);
//     return -1
// }
// console.log(addRest(100, 2, 3, 4, 5, 6));


// // never type
// const throwError = (message: string): never => {
//     throw new Error(message)
// }


// type One = string;
// type Two = string | number;
// type Three = 'hello'

// let a: One = 'hello'
// let b = a as Two
// // b=2
// let c = a as Three

// let d = <One>'world'
// let e = <string | number>2

// console.log(b);


// //Doom Elements
// const img = document.querySelector('img') as HTMLImageElement

// img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Unicode_0x0059.svg/1200px-Unicode_0x0059.svg.png'

// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear:string = new Date().getFullYear().toString()
// console.log(thisYear);

// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear