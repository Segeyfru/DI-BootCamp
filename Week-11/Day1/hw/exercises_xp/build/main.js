"use strict";
// Exercise 1
console.log('Hello World');
// Exercise 2
let username = 'Jack';
let age = 27;
console.log(username, age);
// Exercise 3
let id;
id = 4;
id = 'dss';
// Exercise 4
const posNegZero = (a) => {
    if (a > 0) {
        return 'Positive';
    }
    else if (a < 0) {
        return 'Negative';
    }
    else {
        return 'Zero';
    }
};
console.log(posNegZero(0));
// Exercise 5
const add = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b + '';
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return 'Error';
    }
};
console.log(add('2', '3'));
// Exercise 6
const getDetails = (name, age) => {
    let greeting = [name, age, `Hello ${name}`];
    return greeting;
};
console.log(getDetails('Jack', 27));
// Exercise 7
const createPerson = (name, age) => {
    let newUser = { name, age };
    return newUser;
};
console.log(createPerson('Jack', 27));
// Exercise 8
const element = document.querySelector('button');
const button = element;
if (button) {
    button.innerText = 'Click me!';
    button.addEventListener('click', () => {
        alert('Button was clicked');
    });
}
else {
    console.log('Button was not found');
}
// Exercise 9
const getAction = (role) => {
    switch (role) {
        case 'admin':
            console.log('Welcome Home, Master');
            break;
        case 'headmaster':
            console.log('Peeves greets you, shcool headmaster');
            break;
        default:
            console.log('Welcome');
            break;
    }
};
getAction('headmaster');
