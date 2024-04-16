const {db} = require('../config/data.js')

const _getAllPosts = ()=>{
    return db('posts').select('id','title','content').orderBy('id')
}
const _getPostById = (post_id)=>{
    return db('posts').select('id','title','content').where({id:post_id})
}

const _createPosts = (post_id,post_title,post_content)=>{
    return db('posts').insert({id:post_id,title:post_title,content:post_content},['id','title','content'])
}
const _updatePostById = (post_id,post_title,post_content) =>{
    return db('posts').update({title:post_title, content:post_content},['id','title','content']).where({id:post_id})
}
const _deletePostById = (post_id)=> {
    return db('posts').del().where({id:post_id}).returning('id','title','content')
}


module.exports = {
    _getAllPosts,
    _getPostById,
    _createPosts,
    _updatePostById,
    _deletePostById,
}