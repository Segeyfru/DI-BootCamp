const {db} = require('../config/data.js')

const _getAllPosts = async()=>{
    try {
        const allPosts = await db('posts2').select('id','title','content','timestamp')
        return allPosts
    } catch (error) {
        console.log('error in models');
        throw new Error(error)
    }
}

const _getPostById = async(id) =>{
    try{
        const postById = await db('posts2').select('id','title','content','timestamp').where({id}).first()
        return postById
    } catch (error) {
        console.log('error in models');
        throw new Error(error)
    }
}

const _createPost = async(title,content) =>{
    try{
        const [newPost] = await db('posts2').insert({title,content},['id','title','content','timestamp'])
        return newPost
    } catch (error) {
        console.log('error in models');
        throw new Error(error)
    }
}

const _updatePostById = async(id,updatedPost) =>{
    try{
        const [postUpdate] = await db('posts2').update(updatedPost,['id','title','content','timestamp']).where({id});
        return postUpdate
    }catch (error) {
        console.log('error in models');
        throw new Error(error)
    }
}
const _deletePostById = async(id) =>{
    try{
        const [deletePost] = await db('posts2').del().where({id}).returning(['id','title','content','timestamp'])
        console.log(deletePost);
        return deletePost
    }catch (error) {
        console.log('error in models');
        throw new Error(error)
    }
}


module.exports = {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePostById,
    _deletePostById,
}