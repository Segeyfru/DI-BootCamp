const { _getAllUsers, _getUserById, _updateUserById } = require('../models/users_models.js')
const { hashPassword } = require('../config/hash.js');

const getAllUsers = (req,res) =>{
    _getAllUsers()
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({ msg: 'something went wrong' })
        console.log(err)
    })
}


const getUserById = (req,res) =>{
    const {id} = req.params
    _getUserById(id)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({ msg: 'something went wrong' })
        console.log(err)
    })
}

const updateUserById = async (req, res) => {
    const {id} = req.params
    const {first_name, last_name, email, username, password} = req.body
    let hash = await hashPassword(password)
    _updateUserById(id,first_name, last_name, email, username, hash)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({ msg: 'something went wrong' })
        console.log(err)
    })
}

module.exports = { getAllUsers, getUserById, updateUserById }