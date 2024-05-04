const url = 'http://localhost:3001/question'
const form = document.forms[0]
const questions = document.getElementById('question')
const idOfQuestion = document.querySelector('p')

const fillQuestion = async () => {
    try {
        const { question, options } = await getFunc(url)
        idOfQuestion.innerHTML = question.id
        console.log(options);
        form.innerHTML = '';
        if (!question) {
            questions.innerHTML = 'The questions are over!'
            return
        }
        questions.innerHTML = `${question.id}. ${question.question}`
        for (const option of options) {
            console.log(option);
            form.innerHTML += `<input type="radio" id="${option.id}" name="option" value="${option.id}">
            <label for="${option.id}">${option.option}</label><br>`

        }

    } catch (error) {
        console.log(error);
        question.innerText = 'Something went wrong'
    }
}

const updateNextQuestion_Option = async (e) => {
    e.preventDefault()
    const user_answer = form.option.value;
    const question_id = questions.innerHTML
    try {
        const updatedAnswer = await fetchFuncPUT(url, {question_id, user_answer} )



        fillQuestion()
    } catch (error) {
        console.log(error);
        question.innerText = 'Something went wrong'
    }
}
const updatePreviousQuestion_Option = async(e) =>{
    e.preventDefault()
    const user_answer = form.option.value;
    let question_id = questions.innerHTML
    question_id = question_id--
    try {
        const updatedAnswer = await fetchFuncPUT(url, {question_id, user_answer} )



        fillQuestion()
    } catch (error) {
        console.log(error);
        question.innerText = 'Something went wrong'
    }
}



async function getFunc(url) {
    try {
        const resp = await fetch(url);
        const obj = await resp.json()
        return obj


    } catch (error) {
        console.log(error);
        throw Error(error)

    }
}
async function fetchFuncPost(url, body) {
    try {
        const resp = await fetch(url, {
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
async function fetchFuncPUT(url, body) {
    try {
        const resp = await fetch(url, {
            method: "PUT",
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

fillQuestion()
// getFunc(url)