const express = require('express')
const {
    getAllBooks,
    getBookById,
    createNewBook,
    deleteNewBook,
} = require('../controllers/controller_book.js')

const route = express.Router()

route.get('/books', getAllBooks)
route.get('/books/:id', getBookById)
route.post('/books', createNewBook)
route.delete('/books/:id', deleteNewBook)


module.exports = route