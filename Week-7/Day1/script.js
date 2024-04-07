// let p = new Promise((res, rej) =>{
//     setTimeout(() =>{
//         rej(5);
//     },2000);

// })
// console.log(p);

// p
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log('error=>',error);
// });

// const flip = () =>{
//     const coin = Math.floor(Math.random() * 2);
//     // console.log(coin);
//     return coin === 0 ? 'head' : 'tail'
// }
// // console.log(flip());

// const flipCoin = new Promise((res,rej)=>{
//     setTimeout(() =>{
//         const flipResult = flip();
//         if(flipResult === 'head'){
//             res(flipResult);
//         }else{
//             res(flipResult)
//         }
//     },3000);
// });

// console.log('before');
// flipCoin
//     .then((result) =>{
//         console.log(result);
//         return result +'!'
//     })
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((e) => {
//         console.log(e);
//     });
// console.log('after');

// const getX = () => {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res(5)
//         }, 3000);
//     });
// }

// const getY = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(6);
//         },2000)
//     })
// };
// const getXY = () =>{
//     return new Promise((res,rej) =>{

//     })
// }

// getX().then((x) => {
//     getY().then((y) => {
//         console.log(x + y);
//     });
// });

/**
 * 1. getDataFromServer function return a Promise with data as
 * Array of objects from server 
  
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 * 
 * 4. return to step 2, and create render function that will display
 * */

// const getDataFromServer = (num) => {
//     return new Promise((res, rej) => {
//         const arr = [
//             { username: "aaa", email: "aaa@gmail.com" },
//             { username: "bbb", email: "bbb@gmail.com" },
//             { username: "ccc", email: "ccc@gmail.com" },
//         ];
//         setTimeout(() => {
            
//             if (arr.length < 5) {
//                 res(arr);
//             } else {
//                 rej("error => length is more than 5 ");
//             }
//         }, 2000);
//     });
// };
// getDataFromServer()
//     .then((result) => {
//         console.log(result);
//         rander(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// const rander = (arr) =>{
//     const html  = arr.map((item) => {
//         return `<div> ${item.username}, ${item.email}</div>`
//     });
//     document.getElementById('root').innerHTML = html.join("");
// }

// console.log('aaaa');

/** fetch -> return Promise */

// let returnData = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(returnData);
// returnData.then(res => {
//     return res.json();
// }).then(res => {
//     console.log(res);
// })

/** Promise static methods
 * Promise.all
 * Promise.allSettled
 * Promise.race
 * Promise.any
 */

const promise1 = new Promise((res,rej) =>{
    setTimeout(() => {
        res('promise1')
    }, 5 * 1000);
});
const promise2 = new Promise((res,rej) =>{
    setTimeout(() => {
        // res('promise2')
        rej('promise2')
    }, 3 * 1000);
});
const promise3 = new Promise((res,rej) =>{
    setTimeout(() => {
        res('promise3')
    }, 4 * 1000);
});

// Promise.all([promise1,promise2,promise3])
// .then(ret =>{
//     console.log(ret);
// })
// .catch(err=>{
//     console.log(err);
// });

// Promise.allSettled([promise1,promise2,promise3])
// .then(ret =>{
//     console.log(ret);
// })
// .catch(err=>{
//     console.log(err);
// });

// Promise.race([promise1,promise2,promise3])  // the one who fineshed first 9(doesn`t metter RES or REJ)
// .then(ret =>{
//     console.log(ret);
// })
// .catch(err=>{
//     console.log(err);
// });

Promise.any([promise1,promise2,promise3]) // first one who have resolve
.then(ret =>{
    console.log(ret);
})
.catch(err=>{
    console.log(err);
});
