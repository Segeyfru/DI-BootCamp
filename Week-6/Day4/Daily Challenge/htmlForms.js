let jsonList = document.getElementById('jsonlist');
let btn = document.getElementById('send')
btn.addEventListener('click',sendForm)

function sendForm(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let obj = {name: name, lastname: lastName};
    let objJSON = document.createElement('p')

    objJSON.innerHTML = JSON.stringify(obj)
    jsonList.appendChild(objJSON)


}