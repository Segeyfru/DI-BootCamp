const form = document.forms[0];
const login = document.getElementById('login')


function creatBody() {
    let user_first_name = form.first_name.value;

    let user_last_name = form.last_name.value;

    let user_email = form.email.value;

    let user_username = form.username.value;

    let user_password = form.password.value;

    const user_info = {
        first_name: user_first_name,
        last_name: user_last_name,
        email: user_email,
        username: user_username,
        password: user_password,
    }
    return user_info
}

async function createUser(e) {
    e.preventDefault()
    try{
    const user = creatBody()
    for (const key in user) {
        console.log(key, '+=', user[key]);
        if(user[key] ==''){
            console.log( 'stop');
            login.innerHTML = 'Fill in all the fields'
           return
        }
    }
    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
console.log(response.status);
            if (!response) {
                login.innerHTML = `Network response was not ok`
                throw new Error('Network response was not ok')
            } else if (response.status === 400) {
                console.log(`Account already exist`);
                login.innerHTML = `Account already exist`
            } else if (response.status === 200) {
                console.log('Hello, ${user.first_name}!');
                clearForm()
                login.innerHTML = `Hello, ${user.first_name}! Your account is now created!`
            }
        })
        .catch(err => console.log(err))
    }catch(err){
        console.log('ERROR --> ',err);
    }
}

function clearForm(){
    form.email.value = '';
    form.password.value = '';
    form.first_name.value = '';
    form.last_name.value = '';
    form.username.value = '';
}