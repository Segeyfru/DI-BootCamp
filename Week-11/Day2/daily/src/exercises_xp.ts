
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
console.log(person.address = 'Israel');
console.log(person.address);


// Exercise 2

