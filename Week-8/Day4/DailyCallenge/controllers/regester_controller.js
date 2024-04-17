const bcrypt = require('bcrypt');

const { _createUser, _getUserByEmail, _checkEmailExist } = require('../models/register_models.js')
const { hashPassword } = require('../config/hash.js');

const createUser = async (req, res) => {
    const { first_name, last_name, email, username } = req.body;
    const hash = await hashPassword(req.body.password)
    _checkEmailExist(email)
    .then(existingUser =>{
        if(existingUser){
            res.status(400).send('Account already exist')
        }else{
            _createUser(first_name, last_name, email, username, hash)
        .then(data => { res.status(200).json(data)
            // console.log('data', data);
            // console.log('data length', data[0].length);
            // if (data[0].length == 5) {
            //     res.status(200).send(data)

            // } else if (data[0].length == 1) {
            //     res.status(404).send('')
            // }else{
            //     throw new Error('something went wrong')
            // }
        })
        .catch(err => {
            res.status(404).json({ msg: 'something went wrong with saving account' })
            console.log(err)
        })
        }
    })
    .catch(err => {
        res.status(404).json({ msg: 'something went wrong with checking email' })
        console.log(err)
    })
    
}

module.exports = {
    createUser,
}

