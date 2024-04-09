let randomId = -1;
console.log(randomId);
const pad = document.getElementById('pad')
const screen = document.getElementById('screen')

// logAll()
async function logAll(){
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10000`;
    try {
        const resp = await fetch(url);
        if (resp.status !== 200) {
            throw Error(err);
        }
        const obj = await resp.json();
        const result = await obj.results;
        console.log(result);
    } catch (err) {
        console.log("ERROR --> ", err);
    }
}

function randomPoc(){
    randomId = Math.floor(Math.random() * 1303)
    createPoc()
}

async function createPoc() {
    
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${randomId}`;
    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10000`;
    try {
        const resp = await fetch(url);
        if (resp.status !== 200) {
            throw Error(err);
        }
        const obj = await resp.json();
        const result = await obj.results;
        console.log(result);
        const pocName = result[0].name
        const pocUrl = result[0].url
        const pocObj =await getFromUrl(pocUrl)
        console.log(pocObj);
        showPoc(pocObj)

    } catch (err) {
        console.log("ERROR --> ", err);
    }
}
async function getLeftPoc(e){
    e.preventDefault();
    randomId--
    createPoc()
}
async function getRightPoc(e){
    e.preventDefault();
    randomId++
    createPoc()
}

function showPoc(obj){
    let name = obj.name;
    let newName = capitalaseName(name)
    console.log(newName);
    let type = capitalaseName(obj.types[0].type.name)
    let img = obj.sprites.front_default
    screen.innerHTML = ` <img src="${img}" alt="">`
    pad.innerHTML = `
    <h1>${newName}</h1>
    <h3>Pokemon n°: ${randomId - 1}</h3>
    <h3>Height: ${obj.height}</h3>
    <h3>Weight: ${obj.weight}</h3>
    <h3>Type: ${type}</h3>`
}

function capitalaseName(str){
    // let words = name.split(' ');
    let words = str.split(' ' && '-');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let result =  capitalizedWords.join('-');
    return result
}

async function getFromUrl(url) {
    try {
        const resp = await fetch(url);
        if (resp.status !== 200) {
            throw Error(err);
        }
        const obj = await resp.json();
        return obj


    } catch (err) {
        throw Error(err);
    }
}
// randomPoc();
