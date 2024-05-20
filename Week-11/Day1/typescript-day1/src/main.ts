// let username = 'John';
// let age = 25;

// username = 'Dan';
// // username = 23;

// // age = '794'

// let a = 12;
// let b = '12';
// let c = 2;

// console.log(a + b);

// console.log(a + b);

let a: number = 12;

let b: string;

b = 'abc'
a = 123

let yesNo: boolean = true;

// yesNo = 0

let str: string = 'abc'

let bool: boolean = true


// type any - try not to use any
let anyWar: any = 12
anyWar = 'asd'

// function
const sum = (a: number, b: number): number => {
    return a + b
};

console.log(sum(2, 6));

const contact = (a: number, b: string | number): number | string => {
    if (typeof b === 'string') {
        return a + b + ''
    }
    return a + b
};

console.log(contact(2, '6'));



// union type
let union: number | string = 12;
union = 'abc'
let union2: number | string | boolean = 12;
union2 = 'abc'
union2 = true


// type RegExp
let re: RegExp = /\w+/g;

let strarr: string[] = ['a', 'b', 'c']
let strarr2: string[] = []

strarr.push('d')
strarr.push('1')

let numstr: (string | number)[] = ['a', 1, 'b', 2]

// type Tuple
let mytuple: [string, number, boolean] = ['a', 1, true]

// type Object

let myObj: object = {}
myObj = []

const myObj2 = {
    name: 'John',
    age: 23,
}

// myObj2.name = 8
myObj2.age = 8

// type & interface
type MyType =[string,number,boolean]
let mytype = ['a',1,true]

// interface:MyInerface ={
//     arr:[string,number,boolean];
// }

type User = {
    name:string;
    age:number;
    address?: string;
}

let user:User = {
    name:'Jack',
    age:3,
}

const printUser= (user:User)=>{
    console.log(user);
}
// printUser(user)

// type Enum

enum Grade{
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade[2]);
console.log(Grade.D);
