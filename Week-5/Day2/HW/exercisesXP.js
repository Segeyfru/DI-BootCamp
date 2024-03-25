const people = ['Greg', 'Mary', 'Devon','James']

// //          Exercise 1.1

// people.shift()
// // people[3] = 'Jason'
// people.push('Sergey')

// console.log(people.indexOf('Mary'));
// let newArr = people.slice(1)

// console.log(people.indexOf('Foo'));
// let last = people.slice(people.length - 1)

// console.log(last);
// console.log(newArr);

// //          Exercise 1.2

// for (const key in people) {
//     console.log(people[key]);
// }

// for (const key in people) {
//     console.log(people[key]);
//     if (people[key] =='Devon'){
//         break
//     }
// }

// //          Exercise 2
// let colors = ['red','green','pink','yellow'];

// let i = 0
// let len = colors.length;

// while (i < len) {
//     i++
//     if (i === 1) {
//         let toPrint = `My ${i}st choice is ${colors[i]}`
//         console.log(toPrint);
        
//     }else if(i === 2){
//         let toPrint = `My ${i}nd choice is ${colors[i]}`
//         console.log(toPrint);
//     }else if(i === 3) {
//         let toPrint = `My ${i}rd choice is ${colors[i]}`
//         console.log(toPrint);
//     }else{
//         let toPrint = `My ${i}th choice is ${colors[i]}`
//         console.log(toPrint);
//     }
// }

// //          Exercise 3
// let flag = true
// while (flag){
    
//     phoneNum = prompt('What is you phone number?')
//     if(phoneNum.length == 10){
//         flag = false
//         console.log(phoneNum);
//     }
// }


//          Exercise 4.1

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//          Exercise 4.2   Console.log the number of floors in the building.

console.log(building.numberOfFloors);

//          Exercise 4.3   Console.log how many apartments are on the floors 1 and 3.

console.log(`First Floor: ${building.numberOfAptByFloor.firstFloor}, Third floor: ${building.numberOfAptByFloor.thirdFloor}`);

//          Exercise 4.4   Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1],'has' ,building.numberOfRoomsAndRent.dan[0], 'rooms');

//          Exercise 4.5   Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1] ){
    building.numberOfRoomsAndRent.dan[1] += 1200
    console.log(building.numberOfRoomsAndRent.dan[1]);
}

//          Exercise 5
let family = {
    mom: 'Lily',
    dad: 'Tony',
    child1: 'Kate',
    child2: 'Mary',
    cat: 'Fluffy'
}
//          Exercise 5.2 & 5.3 
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

for (const iterator in family) {
    console.log(iterator, '---->', family[iterator]);
    
}

//          Exercise 6   Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let str = ''
  for (const key in details) {
    str += key + ' ' + details[key] + ' '
}
console.log(str);

//          Exercise 7

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort()

let firstChar = ''
for (const i in names) {
    firstChar += names[i].slice(0,1)
}
console.log(firstChar);

