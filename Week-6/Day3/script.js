// function calcDigit2(n){
//     let arr = new String(n).split('');
//     let number = arr.reduce((total,num) => {
//         return total + Number(num)
//     },0)
//     return number < 10 ? number : calcDigit2(number)
// }

// function calcDigit(num){
//     let arr = new String(num).split('');
//     console.log(arr);
//     let ret = 0;
//     for (let i in arr) {
//         ret = ret + new Number(arr[i]);
//     }
//     console.log(ret);
//     if(ret < 10){
//         return ret
//     }
//     return calcDigit(ret);
// }
// console.log(calcDigit(29));

// ************************************************************************************************************************************************

/** Object method */
/** destracturing of objects */

// let user = {
//     name: 'John',
//     email: 'jjj@mail.com',
//     age: 26,
//     address:{
//         city: 'Tel Aviv',
//     }
// }

// const{email,name,age,address:{city}} = user;
// console.log(name,age,email,city);

// // let arr = [2,4,3]
// // let [a,b,c] = arr;
// // console.log(b,c,a);

// function getUserInfo ({email,name,age,address:{city}}){
//     return name,email,age,city;
// };
// console.log(getUserInfo(user));

// let user = {
//     name: "John",
//     email: "jjj@mail.com",
//     age: 26,
// };

// for(let x in user){
//     console.log(x, user[x]);
// }

                                                    /**  Object to array */
//                                   /**  Object.keys */

// let keys = Object.keys(user);
// console.log(keys);

//                                   /** Object.values */

// let values = Object.values(user);
// console.log(values);

//                                  /** Object.entries */

// let entries = Object.entries(user); // create array of arrays with NAME-VALUE
// console.log(entries);

// entries.forEach(([key, value]) => {
//     console.log(key, value);
// });

                                /** Object.fromEntries */

// let arr = [
//     ["name", "John"],
//     ["email", "jjj@mail.com"],
//     ["age", 26],
// ];

// let obj = Object.fromEntries(arr)
// console.log(obj);

// let user = {
//     name: 'John',
//     email: 'jjj@mail.com',
//     age: 26,
//     address:{
//         city: 'Tel Aviv',
//     }
// }
// // let user1 = {...user};
//                         /** JSON */

// let userJson = JSON.stringify(user)
// console.log(user);
// console.log(userJson);

// let user1 = JSON.parse(userJson)
// console.log(user1);

/** Spreading */

// let user1 = {...user, name: 'Marry', status: 'Single'};
// // user1.name = 'Marry'


// console.log(user);
// console.log(user1);


// /** this. */
// console.log(this.document);

// let obj = {
//     name: 'Jack',
//     getName: function(){
//         return this.name
//     }
// }

// console.log(obj.getName());

/**  Class */

class Animal{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
    getType() {
        return this.type;
    }
    setName(name) {
        this.name = name
    }
    getTypeAndName() {
        return this.type + ' ' + this.name
    }
};

class Dog extends Animal{
    constructor(name){
        super('Dog', name);
    }
}

class Cat extends Animal{
    constructor(name){
        super('Cat',name);
    }
}

let cat1 = new Cat('Chichi')
let dog1 = new Dog('Shadow')

console.log(dog1.getType());
console.log(cat1);





// let myDog = Animal('Hasky','Kuku');
// let yourDog = Animal('Frenchi','Bobo');

// console.log(myDog);
// console.log(yourDog);