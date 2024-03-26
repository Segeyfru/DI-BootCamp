
// function getEmail(user_name,birthday = 1){
//     let email = `${user_name.toLowerCase()+birthday}@mail.com`
//     return email
// }

// function myAges(myAge) {
//     let myMumAge = myAge * 2 
//     console.log(`My mum age is ${myMumAge}`);
//     console.log(`My dad age is ${myMumAge * 1.2}`);
// }
// myAges(25)



// let title = document.body.firstElementChild
// console.log(title);
// // userName = prompt('What is you name?')
// title.textContent = `Hello Sergey`

// let mainDiv = document.body.children[1]

// title.style.color = 'blue'

let divNode = document.body.firstElementChild
let divNode1 = document.body.children[0]
console.log(divNode);
console.log(divNode1);
let ulNode = document.body.lastElementChild
let ulNode1 =divNode.nextElementSibling
console.log(ulNode1);
console.log(ulNode);

let namePete = ulNode1.children[1]
let namePete1 = ulNode1.lastElementChild
console.log(namePete);
console.log(namePete1);
