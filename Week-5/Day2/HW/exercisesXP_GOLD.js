// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7]

for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        let bool = element %3 == 0
        console.log(bool);
        
    }
}

//              Exercise 2 : Attendance
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }

// let userName = prompt('What is your name?')

// if (userName in guestList){
//     console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`);
// }else{
//     console.log(`Hi! I'm a gest.`);
// }


//              Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = 0
let max = 0
for(let i= 0; i < age.length; i++){
    sum += age[i]
    if (age[i] > max){
        max = age[i]
    }
}
console.log(sum);
console.log(max);
