const questionText = document.getElementById('question')
const answer = document.forms.answer
console.log(questionText);
console.log(answer);

async function getAnswer(e){
    e.preventDefault()
    
    render()
}
const render = async()=>{
    const resp = await fetch('http://localhost:3000/quiz');
    const data = await resp.json();
    let questions = data.question
    if(!questions){
        questionText.innerHTML = questions.question
        getScors()
    }
    questionText.innerHTML = questions.question
}
render()