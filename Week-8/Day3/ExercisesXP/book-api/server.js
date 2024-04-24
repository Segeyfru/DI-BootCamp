const express = require('express')
const routes = require('./routes/route_book.js')

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000, () => console.log('Run on 5000'))

app.use('/', routes)