// Exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// /** 'I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)' */

// Exercise 2

// function displayStudentInfo(objUser){
//     let {first, last} = objUser
//     let fullName = first +' '+ last;
//     return `Your full name is ${fullName}`
// }
// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

// Exercise 3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// let arrays = Object.entries(users);

// arrays.forEach((item) => {
//     item[1] = item[1] * 2 
// });

// console.log(arrays);

// Exercise 4

// class Person {
    //     constructor(name) {
        //       this.name = name;
        //     }
        //   }
        
        //   const member = new Person('John');
        //   console.log(typeof member); /** object */
        
// Exercise 5

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
// };

// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };   /** I think that this one will successfully extend the Dog class */



//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Exercise 6.1
// Exercise 6.

// console.log([2] === [2]);

// console.log({} === {}); 
/** Bouth false because it is diferent objects and they have diferent 'links' to diferent parts of memory  */

// Exercise 6.2
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) /** 4 */
// console.log(object3.number) /** 4 */
// console.log(object4.number) /** 5, because object 4 it is he self object, it just has similar values. */



// Exercise 7.3
class Animal{
    constructor(type,name,color){
        this.type = type;
        this.name = name;
        this.color = color
    }
}

// Exercise 7.4

class Mamal extends Animal{
    constructor(name,color){
        super('Mamal')
        this.name = name;
        this.color = color
    };
    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}

let farmerCow = new Mamal('Lily','brown and white');

console.log(farmerCow.sound('Mooo'));

// Exercise 7.5