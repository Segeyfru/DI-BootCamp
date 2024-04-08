let randOffset = Math.floor(Math.random() * 5000);

const url = `https://api.giphy.com/v1/gifs/trending?limit=1&offset=${randOffset}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

async function fienderGif(){
    try{
        console.log(randOffset);
        const resp = await fetch(url)
        if(resp.status === 200){
            const obj = await resp.json()
            const data = obj.data[0]
            const url = data.images.original.url;
            document.body.innerHTML = `<img src="${url}" alt="">`
        }else{
            throw Error(resp.status)
        }
            
    }catch(err){
        console.log('ERROR --> ',err);
    }
    
}
// fienderGif()

/** Exercise 2 */

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()
/** in normal order */

// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast

/** Exercise 3 */

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done

// slow promise is done  /** since this moment I`m not sure */

// fast  OR undefiended?! dont know
// slow  OR undefiended?! dont know


/** Exercise 4 */

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
    const [ users, posts, albums ] = await urls.map(async(url) => {
        const resp = await fetch(url);
        const obj = await resp.json();
        return obj
    });
    console.log('users',await users);
    console.log('posta',await  posts);
    console.log('albums', await albums);
}
getData()