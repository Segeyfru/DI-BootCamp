
class Person {
    constructor(
        private _firstName: string = 'John',
        private _lastName: string = 'Doe',
        public _age: number = 30,
        protected _address: string = 'Israel,Tel-Aviv'
    ) { }
    get firstName() {
        return this._firstName
    }
    set firstName(firstName: string) {
        this._firstName = firstName
    }
    get lastName() {
        return this._lastName
    }
    set lastName(lastName: string) {
        this._lastName = lastName
    }
    get address() {
        return this._address
    }
    set address(address: string) {
        this._address = address
    }
    getFullName = () => {
        return this._firstName + ' ' + this._lastName
    }
}

let person = new Person()
console.log(person.firstName);
person.firstName = 'Niko';
console.log(person.lastName);
console.log(person.getFullName());
console.log(person._age);
console.log(person.address);
person.address = 'Israel';
console.log(person.address);


// Exercise 2

interface Vehicle {
    make: string,
    model: string,
    start(): string
}
interface Car extends Vehicle {
    numberOfDoors: number
}

class Sedan implements Car {

    constructor(public make: string, public model: string, public numberOfDoors: number) { }

    start(): string {
        return `It is ${this.model}, and it has ${this.numberOfDoors} doors`
    }
}

const newSedan = new Sedan('BYD', 'Dolphin', 5)

console.log(newSedan.start())

// Exercise 3

const combineObjects = <T, U>(obj1: T, obj2: U): T & U => {
    const newObj = { ...obj1, ...obj2 }
    return newObj
}

console.log(combineObjects({ name: "John" }, { age: 23 }));

// Exercise 4

class Stack<T> {
    constructor(public elements: T[] = []) { }

    push(element: T) {
        this.elements.push(element)
    }

    pop(): T | undefined {
        const topElement = this.elements.pop()
        return topElement
    }
    isEmpty() {
        if (this.elements.length > 0) {
            return `The length of your stack is ${this.elements.length}`
        }
        return 'Stack is empty'
    }
}
const stack1 = new Stack(['ee', 'www', 'fff'])
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.isEmpty());
console.log(stack1.push('e'));
console.log(stack1);


// Exercise 5

function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {

    const newArray: T[] = []
    for (const element of arr) {
        if (predicate(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

const numbers = [1, 2, 3, 4, 5];
const isEven = (n: number) => n % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);