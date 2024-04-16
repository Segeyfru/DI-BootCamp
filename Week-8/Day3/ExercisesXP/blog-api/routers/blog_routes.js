const express = require('express')
const {
    getAllPosts,
    getPostsById,
    createPost,
    updatePostById,
    deletePostById,
} = require('../controllers/blog_controllers.js')

const route = express.Router()

route.get('/', getAllPosts);
route.get('/:id', getPostsById);
route.post('/', createPost);
route.put('/:id', updatePostById);
route.delete('/:id', deletePostById);

module.exports = route
