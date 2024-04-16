const {_getAllPosts,
    _getPostById,
    _createPosts,
    _updatePostById,
    _deletePostById,
} = require('../models/blog_models.js')

const getAllPosts = (req,res) =>{
    _getAllPosts()
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg:'something went wrong'})
        console.log(err)
    })
}

const getPostsById =(req,res)=>{
    const {id} = req.params;
    _getPostById(id)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg:'something went wrong'})
        console.log(err)
    })
}
const createPost =(req,res)=>{
    const {id,title,content} = req.body
    _createPosts(id,title,content)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg:'something went wrong'})
        console.log(err)
    })
}
const updatePostById =(req,res)=>{
    const {id} = req.params;
    const {title,content} = req.body
    _updatePostById(id,title,content)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg:'something went wrong'})
        console.log(err)
    })
};

const deletePostById = (req,res) =>{
    const { id } = req.params;
    _deletePostById(id)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg:'something went wrong'})
        console.log(err)
    })
}

module.exports = {
    getAllPosts,
    getPostsById,
    createPost,
    updatePostById,
    deletePostById,
}