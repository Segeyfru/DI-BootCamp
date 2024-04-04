// let name = 'value';
// let name2;
// name2 = 5;
// // let str = 'text';
// // let num = 5;
// // let bool = 4 > 5;
// // let void = null;
// // let un = undefined;
// // let arr = [];
// // let obj = {};


// let str2 = ''
// let greeting = 'Hello'
// let name3 = 'Nadav'
// let fullGreeting = greeting + name3
// console.log(fullGreeting);
// console.log(greeting, name3);

// let longstring = "This is a very long string which needs\n" + "to wrap across multiple lines because\n" + "otherwise, my code is unreadable.\n";

// console.log(longstring.length);
// console.log(longstring.indexOf('long'));
// console.log(longstring.substring(15,19));
// console.log(longstring.substring(longstring.indexOf('long'),19));
// let small = longstring.toLowerCase()
// let big = longstring.toUpperCase()
// console.log(small + big);

// // -----------------------------------------

// let num2 = 15
// console.log(isNaN(num2));
// let numIsString = num2.toString();
// let frac = 7.44546194
// console.log(frac.toFixed(2));

// // -------------------------------------
// let bool2 = false
// let checkBool = Boolean(bool2)
// console.log(checkBool);

// let compare = 10 !== '10'
// let compare2 = 10 == '10'
// console.log(compare);
// console.log(compare2);

// let or = 10 > 5 || 4 > 10
// let and = 10 > 5 && 4 > 10
// console.log(or,and);

// let num3 = 5;
// num3++
// num3 += 15
// console.log(num3);

// // ---------------------------------
// // alert('Hello Students')
// // let conf = confirm('Are you OK?');
// // console.log(conf);
// // let promp = prompt('What is you age?')
// // console.log(promp);
// // ---------------------------------
// let arr2 = [1,2,3,4,5]
// console.log(arr2);
let colors = ['blue','red','green'] 
colors[2] = 'pink'
colors.push('green')
colors.pop()
colors.shift()
colors.unshift('brown')
colors.splice(0,0, 'yellow', 'orange')
let sliced = colors.slice(1,3)
console.log(colors);
console.log(sliced);
// ---------------------------------------------------

// let obj2 = {
//     key: 'value'
// }
// let car = {
//     owner: 'Nadav',
//     year: 2016,
//     model: 'ford focus',
//     thing: {
//         key: 'value'
//     }
// }
// car.color = 'gold';
// car.year = 2019
// delete car.thing;
// console.log(car['year']);
// console.log(car.model);
// // console.log(car.thing.key);
// console.log(car);


// ------------------------------

// if(car.year > 2022){
//     console.log(`That's a new car`);
// }else if(car.year < 2005){
//     console.log(`That's an old car`);
// } else{
//     console.log(`That's not a new car`);
// }


// switch(car.owner){
//     case 'gil':
//         console.log(`gil's car`);
//         break
//     case 'Nadav':
//         console.log(`That's Nadav's car`);
//         break
//     case 'fred':
//         console.log(`who's fred anyway`);
//         break
//     default:
//         console.log(`this is default`);
//         break
// }


// // ----------------------------------------------
// let nums = [48, 16,15,48,84,12];

// // for(let i = 0; i < nums.length; i++){
// //     console.log(nums[i] * 2);
// // }

// // for (let num of nums) {
// //     console.log(num);
// // }

// // for (const key in car) {
// //     let value = car[key];
// //     console.log(key +' ----- ' + value);
// // }
// let counter = 0
// // while (counter < 10) {
// //     console.log(counter);
// //     coun++
// //     console.log(counter);
// // }

// do{
//     if(counter === 5){
//         counter++
//         continue
//     }
//     console.log(counter);
//     counter++
// }while(counter < 10);


