const express = require('express')
const {
    getRandomEmoji,
    createUserWithEmoji,

} = require('../controllers/controller.js')

const route = express.Router()

route.get('/', getRandomEmoji)
route.post('/greet', createUserWithEmoji)




module.exports = route