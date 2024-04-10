const bcrypt = require('bcrypt');
// import bcrypt from 'bcrypt'

const hash = (password) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + '', salt);
    return hash
}

// export const hello = 'Hello!'

module.exports = { hash };