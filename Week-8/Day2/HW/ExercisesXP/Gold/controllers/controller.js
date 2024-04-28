const {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePostById,
    _deletePostById,
} = require('../models/model.js')

const getAllPosts = async(req,res)=>{
    try {
        const allPosts =  await _getAllPosts()        
        if (!allPosts){
            return res.status(404).json({message:'Posts not found'})
        }
        res.status(200).json(allPosts)
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const getPostById = async(req,res)=>{
    const {id} = req.params
    try{
        const postById = await _getPostById(id)
        if (!postById){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json(postById)
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const createPost = async(req,res)=>{
    const {title, content}= req.body
    try{
        const newPost = await _createPost(title,content)        
        res.status(200).json({message: 'Your post created successfully',newPost})
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const updatePostById = async(req,res)=>{
    const postUpdated = JSON.parse(JSON.stringify(req.body))
    const {id}= req.params
    try{
        const updeted = await _updatePostById(id,postUpdated)
        if (!updeted){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json({message:'Your post Updated successfully',updeted})
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}

const deletePostById = async (req,res) =>{
    const {id} = req.params
    try{
        const deleted = await _deletePostById(id) 
        if (!deleted){
            return res.status(404).json({message:'Post not found'})
        }
        res.status(200).json({message:'Your post deleted successfully',deleted})
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}



module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostById,
}
