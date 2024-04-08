/** fetch */
/** async /  await */

/** fetch - promise */

// fetch(url, {})

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
// })
//   .then(response => {
//       console.log(response);
//       // .text()
//       // .json()
//       return response.json()
//   })
//   .then(data => {
//       console.log(data);
//   })
// const arrOfJokes = [];
// function getAJoke() {
//     const url = "https://jokes-always.p.rapidapi.com/erJoke";
//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Key":
//                 "a690aab721msh31684601aff45c9p1061f6jsned600c23375d",
//             "X-RapidAPI-Host": "jokes-always.p.rapidapi.com",
//         },
//     };
//     fetch(url, options)
//         .then((response) => {
//             return response.json();
//         })
//         .then((joke) => {
//             arrOfJokes.push(joke);
//             console.log(arrOfJokes);
//             console.log(joke.data);
//         });
// }

// function getGPT() {
//     const url = "https://chat-gtp-free.p.rapidapi.com/v1/chat/completions";
//     const options = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "X-RapidAPI-Key":
//                 "a690aab721msh31684601aff45c9p1061f6jsned600c23375d",
//             "X-RapidAPI-Host": "chat-gtp-free.p.rapidapi.com",
//         },
//         body: {
//             chatId: "92d97036-3e25-442b-9a25-096ab45b0525",
//             messages: [
//                 {
//                     role: "system",
//                     content:
//                         "You are a virtual assistant. Your name is Karen and you would like to be a firefighter.",
//                 },
//                 {
//                     role: "user",
//                     content:
//                         "Hi, what's your name? What would you like to be when you grow up?",
//                 },
//             ],
//         },
//     };
//     fetch(url, options);
// }

// getAJoke();

/** async /  await */

// async function getX() {
//     return 5;
// }
// async function getY() {
//     return 6;
// }

// async function resolveXY() {
//     try {
//         let a = await getX();
//         let b = await getY();
//         console.log(a + b);
//     } catch (error) {
//         console.log("ERROR --> ", error);
//     }
// }
// resolveXY();

// const arrOfJokes = [];

// async function getAJoke() {
//     const url = "https://jokes-always.p.rapidapi.com/erJoke";
//     const options = {
//         method: "GET",
//         headers: {
//             "api_key":
//                 "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
//             
//         },
//     };
//     try {
//         let res = await fetch(url, options);
//         let data = await res.json();
//         arrOfJokes.push(data)
//         console.log(arrOfJokes);
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

/** POST with fetch */

// let post = {
//     userId: 6,
//     title: "my title",
//     body: "bkabkbakba"
// };

// let url = 'https://jsonplaceholder.typicode.com/posts'
// let options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(post)
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log('ERROR --> ',err));

//https://users-18kl.onrender.com/userjson


const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    console.log(name, username,email);
    sendData(name, username,email)
}


const sendData = async (name, username,email) => {
    console.log(name, username,email);
    let url = "https://users-18kl.onrender.com/userjson";
    let options = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, username,email}),
    };
    
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        let arr = data.map(item =>{
            return `<div>${item.name}</div>`
        });
        document.getElementById('container').innerHTML = arr.join('')
    }catch(err){
        console.log('ERROR --> ',err);
    }
}
