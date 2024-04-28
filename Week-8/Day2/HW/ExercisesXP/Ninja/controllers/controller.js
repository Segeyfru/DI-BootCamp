const {
    _getRandomEmoji,
} = require('../models/model.js')


const getRandomEmoji =async (req,res) =>{
    try {
        const randEmojis = await _getRandomEmoji()
        if(!randEmojis){
           return res.status(404).json({message:'Emojis not found'})
        }
        res.json (randEmojis)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)       
    }
}

module.exports = {
    getRandomEmoji,
}