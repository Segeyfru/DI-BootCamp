const {
    _createUser,
    _checkUser,
    _getUserByUserName,
    _getAllUsers,
    _getUserById,
    _updateUserById,

} = require('../models/DC_model.js')


const createUser = async (req, res) => {
    const { email, username, first_name, last_name, password } = req.body
    try {
        const newUser = await _createUser(email.toLowerCase(), username.toLowerCase(), first_name, last_name, password)
        res.status(201).json({ message: 'User created' })

    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }

}

const checkUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await _getUserByUserName(username.toLowerCase(), password)

        if(!user) {
            return res.status(404).json({message:'User not found'})
        }
        const match = await _checkUser(password, user.password)
        
        if(match) {
            return res.status(200).json({message: 'password correct'})
        }else{
            res.status(400).json({message:'wrong password'})
        }

    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }

}

const getAllUsers = async(req,res)=>{
    try{
        const allUsers = await _getAllUsers()
        if(!allUsers){
            return res.status(404).json({message:'Users not found'})
        }
        res.status(200).json(allUsers)


    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

const getUserById = async(req,res)=>{
    const {id} = req.params
    try{
        const user = await _getUserById(id)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        res.json(user)

    }catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

const updateUserById = async(req,res)=>{
    const {id} = req.params
    let updateUserInfo = JSON.parse(JSON.stringify(req.body))
    try{
        const updateUser = await _updateUserById(id,updateUserInfo)
        res.json({message: "User updated successfully"})

    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

module.exports = {
    createUser,
    checkUser,
    getAllUsers,
    getUserById,
    updateUserById,

} 