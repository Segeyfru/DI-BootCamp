const express = require('express')
const books_routes = require('./routes/books.js')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(3000, ()=> console.log('Run on 3000'))

app.use('/books',books_routes)