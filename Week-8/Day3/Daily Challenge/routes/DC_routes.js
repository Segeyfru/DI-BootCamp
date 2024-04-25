const express = require('express')

const {
    createUser,
    checkUser,
    getAllUsers,
    getUserById,
    updateUserById,

} = require('../controllers/DC_controller.js')

const route = express.Router()

route.post('/register', createUser)
route.post('/login', checkUser)
route.get('/users', getAllUsers)
route.get('/users/:id', getUserById)
route.put('/users/:id', updateUserById)



module.exports = route

