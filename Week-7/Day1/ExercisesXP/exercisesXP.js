// /** Exercise 1 */
 const compareToTen = (num) => {
    return new Promise((res,rej) =>{
        if(num <= 10){
            res(num)
        }else{
            rej('Error => The argument is bigger then 10')
        }
    });
 };

compareToTen(5)
.then(ret => {console.log(ret)})
.catch(err => {console.log(err)})

compareToTen(15)
.then(ret => {console.log(ret)})
.catch(err => {console.log(err)})

// /** Exercise 2 */

const p = () =>  new Promise((res,rej) => {
    setTimeout(() => {
        res('success')
    }, 4*1000);
});
p().then(res => console.log(res))

// /** Exercise 3 */
const promiseResolve = Promise.resolve(3);
promiseResolve.then(res => console.log(res))
const promiseReject = Promise.reject('Boo!');
promiseReject.catch(err => console.log(err))