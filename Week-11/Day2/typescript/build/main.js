"use strict";
// // Class
class User {
    // public name: string;
    // private age: number;
    // protected active: boolean
    constructor(
    // name: string, age: number, active: boolean
    name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
        this.name = name;
        this.age = age;
        this.active = active;
    }
    set setAge(age) {
        this.age = age;
    }
    get getAge() {
        return this.age;
    }
    set setActive(active) {
        this.active = active;
    }
    get getActive() {
        return this.active;
    }
}
