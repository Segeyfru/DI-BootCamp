
// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.  Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]

const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
let num = numbers.toString()
console.log(num);

// Using the .join()method convert the array to a string. Try passing different values into the join.  Eg .join(“+”), .join(” “), .join(“”)
num = numbers.join('/')
console.log(num);


// “Bubble Sort”

for(let i = 0; i < numbers.length; i++){
    for(let j = numbers.length - 1; j > 0; j--){
        if(numbers[j] > numbers[j - 1] ){
            let tmp = numbers[j]
            numbers[j] = numbers[j - 1]
            numbers[j - 1] = tmp
            console.log(numbers);
        }
    }
}

console.log(numbers);