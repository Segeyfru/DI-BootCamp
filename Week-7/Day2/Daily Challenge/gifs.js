const container = document.getElementById('container')

let counter =0;

function deleteDiv(e, divId){
    console.log(divId);
    let div = document.getElementById(divId);
    div.remove()
    
}

const handleSubmit = (e) => {
    e.preventDefault();
    let tag = e.target.tag.value;
    e.target.tag.value = "";
    getGif(tag);
};

function deleteAll(e){
    e.preventDefault()
    container.innerHTML=''
}
function createDeleteAll(){
    let deleteAllCheck = document.getElementById('deleteAll')
    console.log(!deleteAllCheck);
    if(!deleteAllCheck){
        let deleteAll = document.createElement('button')
        deleteAll.setAttribute('id','deleteAll')
        deleteAll.setAttribute('onclick','deleteAll(event)')
        deleteAll.textContent = 'DELETE ALL'
        // deleteAll.addEventListener('click',deleteAll)
        container.appendChild(deleteAll)
    }else{
        console.log('hi');
        
    }
}
function createGif(url){
    createDeleteAll()
    let div = document.createElement('div');    
    div.className ='gif'
    div.setAttribute('id', `div${counter}`)
    div.innerHTML = `<img class="img" src="${url}" alt="">
    <button onclick="deleteDiv(event,'div${counter}')">Delete</button>
    `;
    counter++
    console.log(counter);
    container.appendChild(div);

}

const getGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${tag}`;
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            throw Error(response.status);
        };

        const obj = await response.json()
        console.log(obj);
        const gifUrl = await obj.data.images.original.url
        console.log(gifUrl);
        createGif(gifUrl);

    } catch (err) {
        console.log("ERROR --> ", err);
    }
};
