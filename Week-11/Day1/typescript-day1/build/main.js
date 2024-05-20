"use strict";
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
let a = 12;
let b;
b = 'abc';
a = 123;
let yesNo = true;
// yesNo = 0
let str = 'abc';
let bool = true;
// type any - try not to use any
let anyWar = 12;
anyWar = 'asd';
// function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 6));
const contact = (a, b) => {
    if (typeof b === 'string') {
        return a + b + '';
    }
    return a + b;
};
console.log(contact(2, '6'));
// union type
let union = 12;
union = 'abc';
let union2 = 12;
union2 = 'abc';
union2 = true;
// type RegExp
let re = /\w+/g;
let strarr = ['a', 'b', 'c'];
let strarr2 = [];
strarr.push('d');
strarr.push('1');
let numstr = ['a', 1, 'b', 2];
// type Tuple
let mytuple = ['a', 1, true];
// type Object
let myObj = {};
myObj = [];
const myObj2 = {
    name: 'John',
    age: 23,
};
// myObj2.name = 8
myObj2.age = 8;
let mytype = ['a', 1, true];
let user = {
    name: 'Jack',
    age: 3,
};
const printUser = (user) => {
    console.log(user);
};
// printUser(user)
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade[2]);
console.log(Grade.D);
