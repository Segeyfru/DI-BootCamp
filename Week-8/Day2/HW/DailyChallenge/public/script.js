const questionText = document.getElementById('question')
const answer = document.forms.answer


async function getAnswer(e){
    e.preventDefault()
    await fetchQueston()
}

async function fetchQueston(){
    const resp = await fetch('http://localhost:3000/quiz');
    const question = await resp.json();
    questionText.innerHTML = question.question
}