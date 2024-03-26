let allBooks = [];

let potter = {
    title: "Harry Potter and the sorcerers stone",
    author: "J.K.Rowling",
    image: "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: true,
};
let orwel = {
    title: "1984",
    author: "George Orwell",
    image: "https://www.psbooks.co.uk/media/catalog/product/5/1/514363_b64e349d60806587dbe62703da01749f.jpg?quality=80&fit=bounds&height=&width=",
    alreadyRead: true,
};
allBooks += potter, orwel;

console.log(allBooks);

let listBooks = document.body.firstElementChild;

console.log(listBooks);

// for (const book of allBooks) {
//     console.log(book);
//     for (const i of book) {
//         console.log("hi");
//     }
    // let newDiv = document.createElement('div')
    // let h3 = document.createElement('h3')
    // let newP = document.createElement('p')
    // let imgNew = document.createElement('div')
    // h3.innerHTML = allBooks[book][0]
    // newP.innerHTML = allBooks[book][1]
    // imgNew.innerHTML = allBooks[book][2]

    // newDiv.appendChild(h3,newP,imgNew)
    // newDiv.style.width = '100px'
    // if (book[3] == true){
    //     newDiv.style.color = 'red'
    // }
// }

// for( let i = 0; i < allBooks.length; i++){
//     let newDiv = document.createElement('div')
//     listBooks.append(newDiv)
//     new
// }
