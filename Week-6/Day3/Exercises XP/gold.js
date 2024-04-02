// Exercise 1

// function printFullName({first,last}){
//     let fullName = first + ' ' + last
//     return `Your full name is ${fullName}`
// }
// let string = printFullName({first: 'Elie', last:'Schoppik'}) 
// console.log(string);


// Exercise 2

function keysAndValues(obj){
    let arr1 = Object.entries(obj)
    obj = Object.fromEntries(arr1.sort())

    let arr = [];
    let key = Object.keys(obj)
    let values = Object.values(obj)
    arr.push(key)
    arr.push(values)
    return arr
}
let arr = keysAndValues({ b: 2,a: 1,  c: 3 })
console.log(arr);

// Exercise 3

// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment();
//   counterOne.increment();
  
//   const counterTwo = counterOne;  /** it is not a clone ->  */
//   counterTwo.increment();         /** so increse in counterOne too */
  
//   console.log(counterOne.count);  /**  3 */