let jsonList = document.getElementById('jsonlist');
let form = document.body.firstElementChild
// form.addEventListener('onsubmit',sendForm)

function sendForm(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    document.getElementById('name').value = '';
    let lastName = document.getElementById('lastname').value;
    document.getElementById('lastname').value = '';
    let obj = {name, lastName};
    let objJSON = document.createElement('p')
    objJSON.innerHTML = JSON.stringify(obj)
    jsonList.appendChild(objJSON)
}