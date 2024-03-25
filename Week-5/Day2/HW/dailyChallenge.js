
let sentence = 'This dinner is bad !'

let wordNot = sentence.indexOf('not')
let wordBad = sentence.indexOf('bad')

if ((wordNot < wordBad) && wordNot != -1 && wordBad != -1){
    let newsent = sentence.replace(sentence.substring(wordNot, (wordBad + 3)), 'good')
    console.log(newsent);
}else{
    console.log(sentence);
}
