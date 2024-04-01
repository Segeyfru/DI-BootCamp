// Exercise 1


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function colorsInOrder(array){
//     let num = 1
//     for( let item of array){
//         console.log(`${num++}# choice is ${item}`);
//     }
//     let violet = array.some((item) => {
//         return item === 'Violet';
//     });
//     if(violet){
//         console.log('Yeah');
//     }else{
//         console.log('No...');
//     }
// }
// console.log(colorsInOrder(colors));

// Exercise 2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// function colorsInOrder2(arr){
//     let counter = 1;
//     for (let item of arr){
//         if (counter > 3) {
//             console.log(`${counter}${ordinal[0]} choice is ${item}`);            
//         }else{
//             console.log(`${counter}${ordinal[counter]} choice is ${item}`);
//         }
//         counter++
//     }
// }
// colorsInOrder2(colors)

// Exercise 3

// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// /** It will one long array with all words */

// // ------2------
// const country = "USA";
// console.log([...country]);
// /** I thought it will be an array with one string */

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// /** 3 times undefined? 
//  * I don`t know
//  */

// Exercise 4 : Employees

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = users.map((item) => {
//     return `Welcome ${item.firstName}`
// })
// console.log(welcomeStudents);

// const fullStackResidents = users.filter((item) => {
//     return item.role === 'Full Stack Resident';
// });
// console.log(fullStackResidents);

// const bonus = users.filter((item) => {
//     return item.role === 'Full Stack Resident';
// }).map((item) => {
//     return `${item.lastName}`
// })
// console.log(bonus);

// Exercise 5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let string = epic.reduce((total,item) => {
//     return total + ' ' + item
// })
// console.log(string);


// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter((item) => {
    return item.isPassed === true;
});
console.log(passed);

let congrats = students.filter((item) => {
    return item.isPassed === true;
}).forEach((item,index,arr) => {
    console.log(`Good job ${item.name}, you passed the course in ${item.course}`);
});


