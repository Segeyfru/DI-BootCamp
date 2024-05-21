// // Class

// class User {
//     // public name: string;
//     // private age: number;
//     // protected active: boolean

//     constructor(
//         public name: string,
//         private age: number,
//         protected active: boolean
//     ) {
//         // this.name = name;
//         // this.age = age;
//         // this.active = active;
//     }

//     getAge() {
//         return `My age is ${this.age}`
//     }
//     getActive() {
//         return `My active is ${this.active}`
//     }
// }


// class Student extends User {
//     constructor(name: string, age: number, active: boolean) {
//         super(name, age, active)
//     }
//     getStudentAge() {
//         // return `My age is ${this.age}`
//     }
//     getActive() {
//         return `Student active is ${this.active}`
//     }

// }


// let user = new User('Jack', 30, true)
// console.log(user.getAge());

// let user2 = new User('John', 27, true)
// console.log(user2.getAge());

// let student = new Student('Kate', 18, true)
// console.log(student.name);
// console.log(student.getAge());
// console.log(student.getActive());

interface UserInterface {
    name: string,
    age: number,
    active: boolean
}

class User implements UserInterface {
    // public name: string;
    // private age: number;
    // protected active: boolean

    constructor(
        // name: string, age: number, active: boolean
        public name: string,
        public age: number,
        public active: boolean
    ) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    // set setName(name: string) {
    //     this.name = name
    // }
    // get getName() {
    //     return this.name
    // }
    // set setAge(age: number) {
    //     this.age = age
    // }
    // get getAge() {
    //     return this.age
    // }
    // set setActive(active: boolean) {
    //     this.active = active
    // }
    // get getActive() {
    //     return this.active
    // }
}