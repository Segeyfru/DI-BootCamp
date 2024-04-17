const { db } = require('../config/data.js')

const _checkPassword = (userEmail)=>{
    console.log('models');
    return db('users').select('email', 'password').where({email:userEmail})
}

module.exports = {
    _checkPassword
}