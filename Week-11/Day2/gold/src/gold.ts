// Exercise 1
class Animal {
    
    speak(){
        return 'The animal speaks'
    }
}
class Dog extends Animal{
    spek(){
        return `The dog barks`
    }
}

// Exercise 2

interface User {
    id:number,
    name:string,
    email?:string,
}

const getUserInfo =(obj:User):string=>{
    if(obj.email){
        return `This is ${obj.name} ID number ${obj.id}, and email ${obj.email}`
    }
    return `This is ${obj.name} ID number ${obj.id}`
}
console.log(getUserInfo({name:'Jack',id:32398092,email:'iohih@mkas.com'}));

// Exercise 3

function printInfo (arg:string|number):void{
    if(typeof arg === 'string'){
        console.log(`The string is: ${arg}`);
        
    }else{
        console.log(`The number is: ${arg}`);
    }
}
printInfo('ioi')
// Exercise 4

// function filterByProperty<T, K extends keyof T>(array: T[], property: K): T[]{


// }

// Exercise 5


// interface Store<K,V>{
//     set(key: K, value: V): void,
//     get(key: K): V | undefined
// }

// class KeyValueStore<K, V> implements Store<K,V>{
//     set(key:K,value:V):void{
//         this[key] = value
//     }
// }