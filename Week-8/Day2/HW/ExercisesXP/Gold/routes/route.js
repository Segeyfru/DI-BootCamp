const express = require('express')
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostById,
} = require('../controllers/controller.js')

const route = express.Router()

route.get('/', getAllPosts)
route.get('/:id', getPostById)
route.post('/', createPost)
route.put('/:id', updatePostById)
route.delete('/:id', deletePostById)


module.exports = route