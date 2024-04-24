const { db } = require('../config/data.js')

const _checkPassword = (userEmail)=>{
    console.log('models');
    return db('users').select('id','email', 'password').where({email:userEmail}).first()
}

module.exports = {
    _checkPassword
}