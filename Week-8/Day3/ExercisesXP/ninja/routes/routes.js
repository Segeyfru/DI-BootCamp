const express = require('express')

const {
    getQuestionWithOptions,
    updateUserAnswer,
} = require('../controllers/controller.js')

const route = express.Router()

route.get('/question', getQuestionWithOptions)
route.put('/question', updateUserAnswer)


module.exports = route