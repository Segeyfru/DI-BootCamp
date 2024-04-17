const { db } = require('../config/data.js')

const _checkEmailExist = (user_email)=>{
    return db('users').where('email',user_email).first()
}


const _createUser = async (useName, UserLast, userEmail, UserUsername, userPassword) => {
    return db('users').insert({
        first_name: useName,
        last_name: UserLast,
        email: userEmail,
        username: UserUsername,
        password: userPassword
    },["first_name", "last_name", "email", "username", "password"])

}



/** 
const _createUser = async (useName, UserLast, userEmail, UserUsername, userPassword) => {
    let check = await _getUserByEmail(userEmail)
    // console.log(check);
    if(check.length > 0){
    //     console.log('have to stop');
    //     console.log(check.length);
        return check
    }
    // console.log('create account');
    return db('users').insert({
        first_name: useName,
        last_name: UserLast,
        email: userEmail,
        username: UserUsername,
        password: userPassword
    },["first_name", "last_name", "email", "username", "password"])
}
*/



module.exports = { _createUser, _checkEmailExist }