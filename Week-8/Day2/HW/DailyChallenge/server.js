const express = require('express')
const quiz_route = require('./routes/quiz.js')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, (req, res) => console.log('Run on 3000'));

app.use('/quiz', express.static(__dirname + '/public'))



app.use('/quiz', quiz_route)