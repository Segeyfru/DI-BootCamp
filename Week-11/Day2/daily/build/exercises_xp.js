"use strict";
class Person {
    constructor(_firstName = 'John', _lastName = 'Doe', _age = 30, _address = 'Israel,Tel-Aviv') {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._address = _address;
        this.getFullName = () => {
            return this._firstName + ' ' + this._lastName;
        };
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
}
let person = new Person();
console.log(person.firstName);
person.firstName = 'Niko';
console.log(person.lastName);
console.log(person.getFullName());
console.log(person._age);
console.log(person.address);
person.address = 'Israel';
console.log(person.address);
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `It is ${this.model}, and it has ${this.numberOfDoors} doors`;
    }
}
const newSedan = new Sedan('BYD', 'Dolphin', 5);
console.log(newSedan.start());
// Exercise 3
const combineObjects = (obj1, obj2) => {
    const newObj = Object.assign(Object.assign({}, obj1), obj2);
    return newObj;
};
console.log(combineObjects({ name: "John" }, { age: 23 }));
// Exercise 4
class Stack {
    constructor(elements = []) {
        this.elements = elements;
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        const topElement = this.elements.pop();
        return topElement;
    }
    isEmpty() {
        if (this.elements.length > 0) {
            return `The length of your stack is ${this.elements.length}`;
        }
        return 'Stack is empty';
    }
}
const stack1 = new Stack(['ee', 'www', 'fff']);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.isEmpty());
console.log(stack1.push('e'));
console.log(stack1);
// Exercise 5
function filterArray(arr, predicate) {
    const newArray = [];
    for (const element of arr) {
        if (predicate(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
const numbers = [1, 2, 3, 4, 5];
const isEven = (n) => n % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);
