const express = require('express')
const { questions3, questions2 } = require('../config/data.js')
let numberOfQuestion = 0;
const route = express.Router()
// let questions = questions11
let questions = questions3

route.get('/', (req, res) => {
    console.log(questions.length);
    let question = questions[numberOfQuestion]
    numberOfQuestion++
    if(numberOfQuestion > questions.length){
        numberOfQuestion = 0
    }
    console.log('check --> ', question);
    res.json({ question });
})

route.post('/', (req, res) => {
    const { question, answer } = req.body;
    let questionInList = questions
})

module.exports = route