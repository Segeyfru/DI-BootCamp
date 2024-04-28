const url = 'localhost:5000/'

async function listOfEmojis(e){
    e.preventDefault()
    try{
        const emojis = await fetchFunc(url)
        const randomEmoji = getRandomObjects(emojis, 5)
        

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
        console.log('after fetch, only resp');
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
        const obj = await resp.json()
        return obj

    } catch (err) {
        throw Error(err)
    }

}