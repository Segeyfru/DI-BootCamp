const bcrypt = require('bcrypt');

const hash = (password) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + '', salt);
    return hash
}

const hashPassword = async (password) => {
    try {
        const hashPassword = bcrypt.hash(password, 10)
        return hashPassword

    } catch (err) {
        // throw Error(err)
        console.log(err);
    }
}

const checkPassword = async (userPassword, hashPassword) => {
    try{
        const match = await bcrypt.compare(userPassword, hashPassword)
        return match
    }catch (err) {
        throw Error(err)
    }
}

module.exports = { 
    hash,
    hashPassword,
    checkPassword,
 };