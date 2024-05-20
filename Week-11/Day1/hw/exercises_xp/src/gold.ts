// Exercise 1

const formatValue = (a: string | number) => {
    if (typeof a === "string") {
        return a.toUpperCase()
    } else if (typeof a === 'number') {

        return `Jack is ${a} years old`
    }
}
console.log(formatValue('wdfewf'));
console.log(formatValue(3));

// Exercise 2

const sumNumbers = (arr: number[]) => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumNumbers([1,2,3,4,5,6,7]));


// Exercise 3

type User = {
    name:string,
    age:number
}
const introduceUser = (user:User) =>{
    return `Hello, ${user.name}! Are you still ${user.age} years old?`
}
console.log(introduceUser({name:'Jack',age:27}));

// Exercise 4

const greetUser = (name:string,greeting?:string)=>{
    if(greeting){
        return `Hello, ${name}! ${greeting}`
    }
    return `Hello, ${name}! Have a nice day!`
} 
console.log(greetUser('Jack','How are you?'));
console.log(greetUser('Jack'));

// Exercise 5

const calculate = (a: number | string, b: number | string): number | string => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b + ''
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return 'Error'
    }
}
console.log(calculate(2,4));
console.log(calculate('2','4'));
