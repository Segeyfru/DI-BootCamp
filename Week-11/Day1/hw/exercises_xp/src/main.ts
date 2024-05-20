// Exercise 1

console.log('Hello World');

// Exercise 2

let username: string = 'Jack'
let age: number = 27
console.log(username, age);

// Exercise 3

let id: string | number;
id = 4;
id = 'dss'

// Exercise 4

const posNegZero = (a: number): string => {
    if (a > 0) {
        return 'Positive'
    } else if (a < 0) {
        return 'Negative'
    } else {
        return 'Zero'
    }
}
console.log(posNegZero(0));

// Exercise 5

const add = (a: number | string, b: number | string): number | string => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b + ''
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return 'Error'
    }
}
console.log(add('2', '3'));

// Exercise 6

const getDetails = (name:string, age:number) => {
    let greeting: [string,number,string]= [name,age,`Hello ${name}`]
    return greeting
}
console.log(getDetails('Jack',27));

// Exercise 7
type Person ={
    name:string
    age:number
}
const createPerson =(name:string,age:number) =>{
    let newUser:Person={name,age}
    return newUser
}
console.log(createPerson('Jack',27));

// Exercise 8

const element = document.querySelector('button')
const button = element as HTMLButtonElement
if(button){
    button.innerText = 'Click me!'
    button.addEventListener('click',()=>{
        alert('Button was clicked')
    })

}else{
    console.log('Button was not found');
    
}

// Exercise 9

const getAction  = (role:string)=>{
    switch(role){
        case 'admin':
            console.log('Welcome Home, Master');
            break
        case 'headmaster':
            console.log('Pivs greets you, shcool headmaster');
            break
            
        default:
            console.log('Welcome');
            break
             
    }
}
getAction('headmaster')