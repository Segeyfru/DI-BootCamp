/** Exercise 1 */
const exercise1 = () => {
    let url =
        "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw Error("response is not OK");
            }
            return res.json();
        })
        .then((obj) => {
            console.log(obj.data);
        })
        .catch((err) => console.log("ERROR --> ", err));
};
// exercise1()
/** Exercise 2 */
const handleSubmit = (e) => {
    e.preventDefault()
    let q = e.target.q.value;
    e.target.q.value = '';

    let limit = '20';

    let rating = 'g';
    if(e.target.limit.value !==''){
        let limit = e.target.limit.value;
        e.target.limit.value = ''
    };
    if(e.target.rating.value !==''){
        let rating = e.target.rating.value;
        e.target.rating.value = ''
    };
    getGiphy(q,limit,rating)
}
const getGiphy =(q,limit,rating) => {
    console.log(q,limit,rating);
    let url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&rating=${rating}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

    fetch(url)
        .then((res) => {
            if (res.status !== 200) {
                throw Error(res.status);
            }
            return res.json();
        })
        .then((obj) => {
            console.log(obj.data);
        })
        .catch((err) => console.log("ERROR --> ", err)); 
};

/** Exercise 3 */
 const exercise3 =async () =>{
    let url = "https://www.swapi.tech/api/starships/9/"
    try{
        const response = await fetch(url);
        if(response.status !== 200){
            throw Error(response.status)
        }
        const objectStarsWars = await response.json();
        console.log(objectStarsWars.result);
    }catch(err){
        console.log('ERROR --> ',err);
    }
}
// exercise3()

/** Exercise 4 */

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();/** I thought the result would be --  Promise */
    console.log(result); /** but becouse that it is AWAIT. we are "waiting"  and geting already  the result */ 
}

                            /** I understand correctly? */ 
asyncCall(); 