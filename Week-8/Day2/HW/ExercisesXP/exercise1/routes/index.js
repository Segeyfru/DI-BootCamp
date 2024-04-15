const express = require('express')


const route = express.Router()

route.get('/about',(req,res)  => {
    res.json({Hello:'World'})
})
module.exports = route