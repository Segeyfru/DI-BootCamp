"use strict";
// Exercise 1
const mapType = (val) => {
    if (typeof val === 'number') {
        return Math.pow(val, 2);
    }
    return val.length;
};
console.log(mapType(15));
// Exercise 2
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ name: 'Jack', age: 27 }, 'name'));
// Exercise 3
function multiplyProperty(obj, key, factor) {
    if (typeof obj[key] === 'number') {
        console.log('hi');
        console.log(typeof obj[key]);
        // obj[key] *= factor
    }
    else {
        // console.log(`The property "${key}" is not a number.`);
    }
}
multiplyProperty({ name: 'Jack', age: 27 }, 'age', 2);
