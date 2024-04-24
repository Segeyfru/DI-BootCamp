const {db} = require('../config/data.js')

const _getAllUsers = () =>{
    return db('users').select('id','first_name','last_name','email')
}

const _getUserById = (user_id)=>{
    return db('users').select('id','first_name','last_name','email').where({id:user_id})
}

const _updateUserById = async (user_id,updateUser) =>{

    return db('users').update(updateUser,
        ['id', 'first_name', 'last_name', 'email', 'username', 'password']).where({id:user_id})
}

module.exports = { _getAllUsers, _getUserById, _updateUserById }