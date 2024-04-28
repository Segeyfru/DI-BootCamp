const {
    _getRandomEmoji,
    _createUserWithEmoji,
} = require('../models/model.js')


const getRandomEmoji =async (req,res) =>{
    try {
        const randEmojis = await _getRandomEmoji()
        if(!randEmojis){
           return res.status(404).json({message:'Emojis not found'})
        }
        // console.log(randEmojis);
        res.json(randEmojis)
        let x =  JSON.stringify(randEmojis)
        console.log( x);
    } catch (error) {
        console.log(error);
        res.status(400).send(error)       
    }
}

const createUserWithEmoji = async(req,res) =>{
    const {name, emoji_id, emoji_face} = req.body
    try {
        const user_emoji = await _createUserWithEmoji(name, emoji_id, emoji_face)
        if(!user_emoji){
           return res.status(404).json({message:'Emojis not found'})
        }
        res.json (user_emoji)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)       
    }
}
module.exports = {
    getRandomEmoji,
    createUserWithEmoji,
}