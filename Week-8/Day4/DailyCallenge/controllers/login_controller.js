const { _checkPassword} = require('../models/login_models.js')
const { checkPassword } = require('../config/hash.js')

const checkUser = async(req,res) =>{
    const {email, password} = req.body

    const data = await _checkPassword( email)
    const correct = await checkPassword(password,data[0].password)
    if(correct){
        res.status(200).json({password: 'correct'})
    }else{
        res.status(400).json({password: 'not correct'})
    }
    

}

module.exports = { checkUser}

