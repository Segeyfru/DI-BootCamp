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
console.log(person.address = 'Israel');
console.log(person.address);
