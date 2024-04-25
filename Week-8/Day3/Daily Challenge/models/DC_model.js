const { db } = require('../config/data.js')
const bcrypt = require('bcrypt')
const { use } = require('../routes/DC_routes.js')


const _createUser = async (email, username, first_name, last_name, password) => {
    const trx =await db.transaction()
    try {
        const newUser = await trx('users').insert({ email, username, first_name, last_name }, ['id', 'username', "email", 'first_name', 'last_name'])

        const hashPassword = await bcrypt.hash(password, 10);
        const passwordInDB = await trx('hash_pswd').insert({ username, password: hashPassword })

        await trx.commit()

        return { newUser, message: 'Hashed password was created' }

    } catch (error) {
        await trx.rollback()
        console.log(error);
        throw Error(error)

    }
}


const _getUserByUserName = async (username, password) => {
    try {
        const user = await db('users')
            .select('users.username', 'email', 'hash_pswd.password')
            .join('hash_pswd', { 'users.username': 'hash_pswd.username' })
            .where({ 'users.username': username })
            .first()

        return user


    } catch (error) {
        console.log(error);
        throw Error(error)

    }
}

const _checkUser = async (password, hash_psw) => {
    try {

        const match = bcrypt.compare(password, hash_psw)
        return match

    } catch (error) {
        console.log(error);
        throw Error(error)

    }
}

const _getAllUsers = async () => {

    try {

        const allUsers = await db('users').select('id','first_name', 'last_name', 'username', 'email')
        return allUsers

    } catch (error) {
        console.log(error);
        throw Error(error)

    }
}

const _getUserById = async(id)=>{
    try{
        const user = await db('users').select('first_name', 'last_name', 'username', 'email').where({id})
        console.log(user);
        return user

    }catch (error) {
        console.log(error);
        throw Error(error)
        
    }
}

const _updateUserById = async(id,updatedUser)=>{
    let updatePassword;
    if(updatedUser?.password){
        updatePassword = updatedUser.password
        delete updatedUser.password
    }
    const trx = await db.transaction()
    try{

        const [user] = await  trx('users').update(updatedUser).where({id}).returning(['first_name', 'last_name', 'username', 'email'])

        console.log(user);
        if(updatePassword){
            const password = await bcrypt.hash(updatePassword +'', 10)
            await trx('hash_pswd').update({password}).where({username:user.username})
        }
        await trx.commit()
        return {user}
    }catch (error) {
        await trx.rollback()
        console.log(error);
        throw Error(error)

    }
}

module.exports = {
    _createUser,
    _checkUser,
    _getUserByUserName,
    _getAllUsers,
    _getUserById,
    _updateUserById,

}