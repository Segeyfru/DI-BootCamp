
// let users = ['John', 'Mary','Dan','Anne'];
// const len = arr.length

// for (let index = 0; index < len; index++) {
    //     const element = arr[index];
    //     console.log(element, index);
    // }
    // for (let x in arr) {
        //     console.log(x, arr[x]);
        // }
        // for(let x of arr){
            //     console.log(x);
            // }
            // let index = 0;
            
            // while (index < len) {
                //     const element = arr[index];
                //     console.log(element, index);
                //     index++
                // }
                
/** forEach */
                
// users.forEach((item,index,arr)=>{
//     console.log(`item=> ${item}, ${index}`);
//     arr[index] = item + '@gmail.com'
// })
// console.log(users);

// /** some */

// let result = users.some((item) => {
//     return item === 'Dan';
// })
// console.log('result=>', result);

// /** every */

// let result2 = users.every((item) => {
//     return item !== 'Da'
// })

// console.log('result2=>', result2);

/***********************************************************************************************************************************************************************/
// let num  =[1,2,3,4,5,6]


// function map(arr){
//     let newArr = [...arr];
//     newArr.forEach((item,index,a) => {
//         a[index] *= 2
//     });
//     return newArr
// }


// function map(a){
//     let arr = []
//     for (let index = 0; index < a.length; index++) {
//         arr.push(a[index]*2); 
//     }
//     return arr
// }
// console.log(map(num));

// let arr = num.map((item) => {
//     if(item > 3){
//         return item*2
//     }
// });
// console.log(arr);


// let user =[
//     {id:1,name:'John',email:'jjj@mail.com'},
//     {id:2,name:'Jack',email:'jack@mail.com'},
//     {id:3,name:'Mary',email:'mary@mail.com'},
//     {id:4,name:'Anne',email:'aaa@mail.com'},
// ];

// function render(arr){
//     let html = arr.map((item) => {
//         return `<div>
//         <h2>${item.id}</h2>
//         <h4>${item.name}</h4>
//         <p>${item.email}<p>
//         </div>`
//     });
//     document.getElementById('root').innerHTML = html.join('');

// }
// render(user)

/***********************************************************************************************************************************************************************/
// let numbers = [0,1,1,2,3,5,8]
// function newNumbers(arr){
//     let newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] > 3) {
//             newArr.push(arr[index])
//         }        
//     }
//     return newArr;
// }

// console.log(newNumbers(numbers));

// let newArr = numbers.filter(item => {
//     return item > 3;
// })

// console.log(newArr);


// let names =['John','Mor','Marry','Or'];

// let user =[
//     {id:1,name:'John',email:'jjj@mail.com'},
//     {id:2,name:'Mor',email:'mmm@mail.com'},
//     {id:3,name:'Marry',email:'marry@mail.com'},
//     {id:4,name:'Or',email:'ooo@mail.com'},
// ];

// let newUser = user.filter(item => {
//     return item.name.toLowerCase().includes('o')
// })
// console.log(newUser);

/***********************************************************************************************************************************************************************/
// let arr = [2,5,10,100];

// function reduce(arr){
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];        
//     }
//     return sum
// }

// function reduce(arr, num = 0){
//     let sum = num;
//     arr.array.forEach(item => {
//         sum += item
//     });
// }

// let sum = reduce(arr, 100)
// console.log(sum);

// let sum = arr.reduce((total,item) => {
//     return total + item;
// },0)
// console.log(sum);


/***********************************************************************************************************************************************************************/

/** FIND */
// let users =[
//     {id:1,name:'John',email:'jjj@mail.com'},
//     {id:2,name:'Mor',email:'mmm@mail.com'},
//     {id:3,name:'Marry',email:'marry@mail.com'},
//     {id:4,name:'Or',email:'ooo@mail.com'},
// ];
// let user = users.find((item) => {
//     return item.id === 3;
// });
// console.log(user);

/** FIND INDEX */

// let index = arr.findIndex((item) => {
//     return item.id === 2
// })

// console.log(index);

// let arr = [2,8,4,4,8,1,8];

// function candles(array){
//     let max = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] > max){
//             max = array[index];
//         }        
//     };
//     let filtered = arr.filter((item) => {
//         return item === max
//     });
//     return filtered.length
// }

// console.log(candles(arr));


/***********************************************************************************************************************************************************************/

/** destracturing */

let arr = [1,2,3,4,5,6];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a,b, ...rest] = arr

console.log(a,b,rest);
