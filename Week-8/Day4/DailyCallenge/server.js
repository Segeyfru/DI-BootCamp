const express = require('express')
const route = require('./routes/routes.js')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3002, ()=> console.log('Run on 3002'))

// app.use('/regester', express.static(__dirname + '/public/register.html'))
// app.use('/', express.static(__dirname + '/public/'))

app.use(route)