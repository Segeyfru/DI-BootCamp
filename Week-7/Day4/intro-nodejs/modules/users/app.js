const {getUser} = require('./main.js')
let x =[];
// const arr =[]
// getUser('https://jsonplaceholder.typicode.com/users').then((users) => console.log(users));
// console.log(arr);

async function users(){
    const users = await getUser('https://jsonplaceholder.typicode.com/users');
    const web = await users.forEach(element => {
        return  element.website
    });
}
users()
let y = users().then(data=>{y=data
return y});
console.log(y);