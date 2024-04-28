const formFirst = document.forms[0]
const greet = document.getElementById('greet')

const url = 'http://localhost:5000/'


const greeting = async(e)=>{
    e.preventDefault()
    const emoji_id = formFirst.emojis.value
    const name = formFirst.name.value
    if(emoji_id ==='' || name === ''){
        greet.style.display = 'block'
            greet.innerHTML = `<h2>Fill in all fields</h2>`
            return
    }
    try{
        const user_emoji = await fetchFuncPost(url + 'greet', {emoji_id,name})
        formFirst.style.display = 'none'
        if(!user_emoji){

            greet.style.display = 'block'
            greet.innerHTML = `<h2>Something wrong</h2>`
            return
        }
        greet.style.display = 'block'
        greet.innerHTML = `<h2>Hello, ${user_emoji.name} - ${user_emoji.emoji_face}</h2>`
    } catch (err){
        console.log(err);
    }
}

async function listOfEmojis(){
    // e.preventDefault()
    // formFirst.emojis.innerHTML = ''
    try{
        const emojis = await fetchFunc(url)
        const randomEmoji = getRandomObjects(emojis, 10)
        for(let item of randomEmoji){
            // let option = document.createAttribute('option')
            // option.innerHTML = item.emoji_face
            // option.value = item.id
            formFirst.emojis.innerHTML += `<option value="${item.id}">${item.emoji_face}</option>`
        }

    } catch (err){
        console.log(err);
    }
}


function getRandomObjects(list, count) {
    const result = [];
    // Перемешиваем список для получения случайного порядка
    const shuffled = list.sort(() => Math.random() - 0.5);
    // Добавляем первые 'count' элементов из перемешанного списка в результат
    for (let i = 0; i < count; i++) {
        result.push(shuffled[i]);
    }
    return result;
}

async function fetchFunc(url) {
    try {
        const resp = await fetch(url);
        const obj = await resp.json()
        return obj

    } catch (err) {
        throw Error(err)
    }

}
async function fetchFuncPost(url,body) {
    try {
        const resp = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        console.log('after fetch, only resp');
        const res = await resp.text()
        const obj = JSON.parse(res)
        return obj

    } catch (err) {
        throw Error(err)
    }

}

listOfEmojis()