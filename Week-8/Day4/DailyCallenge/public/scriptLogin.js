const form = document.forms[0];
const login = document.getElementById('login')


async function checkIn(e) {
    e.preventDefault();
    let user_email = form.email.value;
    let user_password = form.password.value;
    if (email == '' || password == '') {
        login.innerHTML = 'Fill in all the fields'
        return 0
    }else{
        clearForm()
    }
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user_email, password: user_password })
    })
        .then(response => {
            if (!response) {
                login.innerHTML = `Network response was not ok`
                throw new Error('Network response was not ok')
            } else if (response.status === 400) {
                console.log(`Password not correct`);
                login.innerHTML = `Password not correct`
            } else if (response.status === 200) {
                console.log('Correct password');
                login.innerHTML = `Correct password`
            }
        })
}

// function listOfMyusers(e){
//     e.preventDefault()

//     fetch(`http://localhost:3001/users`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email: user_email, password: user_password })
//     })
//     .then(response => {
//         if (!response) {
//             login.innerHTML = `Network response was not ok`
//             throw new Error('Network response was not ok')
//         } else {
//             return JSON.parse(response)
//         }
//     })
//     .then(data => {
//         console.log(data);
//         login.innerHTML = data
//     })
// }
