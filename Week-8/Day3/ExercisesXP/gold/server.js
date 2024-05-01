const express = require('express')
const route = require('./routes/routes.js')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3001, () => console.log('Run on 3001'))

app.use('/api/todos', route)