
// const {people} = require('./data.js');
import {people} from './data.js';

// console.log(people);

const averageAge = (people)=>{
    let sum = 0;
    for (const person of people) {
        sum += person.age
    }
    return sum / people.length
}
console.log(averageAge(people));