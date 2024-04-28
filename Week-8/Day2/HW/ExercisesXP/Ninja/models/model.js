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

const _createUserWithEmoji = async(name, emoji_id, emoji_face) =>{
    try {
        const newUser_emoji = await db('user_emoji').insert({name, emoji_id})
        const [userAndEmoji] = await db('user_emoji')
        .select('user_emoji.name', 'emoji.emoji_face', 'emoji.id')
        .join('emoji', function() {
            this.on('user_emoji.emoji_id', '=', 'emoji.id')
        })
        .where({name,emoji_id})
        // .where({name})
        return userAndEmoji
    } catch (error) {
        console.log('Error in models');
        throw new Error(error)
    }
}

module.exports = {
    _getRandomEmoji,
    _createUserWithEmoji,
}