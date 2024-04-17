const {db} = require('../config/data.js')

const _getAllUsers = () =>{
    return db('users').select('id','first_name','last_name','email')
}

const _getUserById = (user_id)=>{
    return db('users').select('id','first_name','last_name','email').where({id:user_id})
}

const _updateUserById = async (user_id,useName,UserLast,userEmail,UserUsername,userPassword) =>{
    return db('users').update({
        first_name: useName,
        last_name: UserLast,
        email: userEmail,
        username: UserUsername,
        password: userPassword
      },['id', 'first_name', 'last_name', 'email', 'username', 'password']).where({id:user_id})
}

module.exports = { _getAllUsers, _getUserById, _updateUserById }