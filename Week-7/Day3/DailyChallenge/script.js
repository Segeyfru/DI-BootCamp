let fromSelect = document.getElementById('from')
let toSelect = document.getElementById('to')
const sum = document.getElementById('sum')
const form = document.forms[0]
console.log(form);

async function createList(){
    let url = 'https://v6.exchangerate-api.com/v6/5eb497217d9f5cd361dfa65a/codes'
    try{
    const obj = await fetchFunc(url)
    const supportedCodes = obj.supported_codes
    for (const item of supportedCodes) {
        let option = document.createElement('option')
        option.value = item[0];
        option.textContent = `${item[0]} - ${item[1]}`
        if(item[0] !== 'USD'){
            from.appendChild(option)
        }
        let option1 =  document.createElement('option')
        option1.value = item[0];
        option1.textContent = `${item[0]} - ${item[1]}`
        if(item[0] !== 'ILS'){
            to.appendChild(option1)        
        }
    }}catch(err){
        console.log('ERROR --> ',err);
    }

}
createList()

function userChoiseFrom(e){
    e.preventDefault()
    return from.value
}
function userChoiseTo(e){
    e.preventDefault()
    return to.value
}

async function countAmount(e){
    e.preventDefault();
    let convert = form.convert.value
    console.log(convert);
    let from = fromSelect.value
    let to = toSelect.value
    let urlFrom = `https://v6.exchangerate-api.com/v6/5eb497217d9f5cd361dfa65a/latest/${from}`
    try{
        const obj = await fetchFunc(urlFrom);
        const toConversion = obj.conversion_rates[to]
        sum.innerHTML = `Amount: ${convert * toConversion}  ${to}`

    }catch(err){
        console.log('ERROR --> ',err);
    }


}
function switchF(e){
    e.preventDefault()
    let tmp = fromSelect.value;
    fromSelect.value = toSelect.value
    toSelect.value = tmp
    countAmount(e)
}

async function fetchFunc(url){
    try{
        const resp = await fetch(url);
        const obj = await resp.json()
        return obj

    }catch(err){
        throw Error(err)
    }

}