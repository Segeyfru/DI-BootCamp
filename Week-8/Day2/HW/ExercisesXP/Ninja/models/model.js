const {db} = require('../config/data.js')

const _getRandomEmoji = async() =>{
    try {
        const allEmojis = await db('emoji').select('id','emoji_face')
        return allEmojis
    } catch (error) {
        console.log('Error in models');
        throw new Error(error)
    }

}



module.exports = {
    _getRandomEmoji,
}