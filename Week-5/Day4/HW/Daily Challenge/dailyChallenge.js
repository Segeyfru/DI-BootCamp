let form = document.forms[0];
let noun;
let adjective;
let person;
let verb;
let place;

// let submit = document.body.getElementsByTagName("button");
let submit = form.getElementsByTagName('button')[0];
let shuffle = form.getElementsByTagName('button')[1];
console.log(submit);
console.log(form);

submit.addEventListener("click", getInput);
shuffle.addEventListener('click', getStory)

function getInput(e) {
    e.preventDefault();
    noun = form.elements.noun.value;
    adjective = form.elements.adjective.value;
    person = form.elements.person.value;
    verb = form.elements.verb.value;
    place = form.elements.place.value;
    cleanInput()
    getStory(e)
}
function getStory(e) {
    e.preventDefault();
    let f_story = [
        `Once upon a time, a ${adjective} ${noun} decided to visit the ${place}. But little did it know, ${person} was there, ready to ${verb} the night away under the stars!`,
        `In the ${place}, a ${adjective} ${noun} caught the attention of the ${person}. Without hesitation, the ${person} ${verb} the ${noun} slices expertly, much to the surprise of the quiet readers!`,
        `On the ${place}, a ${adjective} ${noun} watched as the ${person} began to ${verb} loudly. The seagulls joined in, creating an unexpected seaside concert!`,
    ];
    let mad_story = f_story[Math.floor(Math.random() * f_story.length)];
    console.log(mad_story);
    putStory(mad_story)
}

function putStory(story) {
    let span =  document.getElementsByTagName('span')[0] 
    let p = document.createElement('p')
    p.innerHTML = `${story}`
    span.innerHTML = ''
    span.appendChild(p)
}
function cleanInput(){
    form.elements.noun.value =''
    form.elements.adjective.value = ''
    form.elements.person.value = ''
    form.elements.verb.value = ''
    form.elements.place.value = ''
}
