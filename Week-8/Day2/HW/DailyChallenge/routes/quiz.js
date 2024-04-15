const express = require('express')
const {questions} = require('../config/data.js')
let numberOfQuestion = 0;
const route = express.Router()

route.get('/',(req,res)=>{


    res.json(questions[numberOfQuestion++]);
})

module.exports = route