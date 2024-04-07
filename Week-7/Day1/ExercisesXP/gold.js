/** Exercise 1 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

let output = Promise.all([promise1,promise2,promise3])

output
.then(res => console.log(res))
.catch(err => console.log(`Error --> ${err}`))



/** Exercise 2 */

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result); /**[ 2,4,6] */
    });