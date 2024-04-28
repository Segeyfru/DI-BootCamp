const express = require('express')
const {
    getRandomEmoji,
    
} = require('../controllers/controller.js')

const route = express.Router()

route.get('/', getRandomEmoji)
route.post('/', )




module.exports = route