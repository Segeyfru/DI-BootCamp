const express = require('express')
const {getAllUsers, getUserById, updateUserById} = require('../controllers/users_controller.js')
const { checkUser} = require('../controllers/login_controller.js')
const {createUser} = require('../controllers/regester_controller.js')

const route = express.Router()

route.get('/users/', getAllUsers)
route.get('/users/:id', getUserById)
route.put('/users/:id', updateUserById)

route.post('/login/', checkUser)

route.post('/register/', createUser)
route.get('/register/', getAllUsers)


module.exports = route