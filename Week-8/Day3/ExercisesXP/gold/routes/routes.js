const express = require('express')
const {
    createNewTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,

} = require('../controller/controllers.js')

const route = express.Router()


route.get('/', getAllTasks)
route.post('/',createNewTask) 
route.get('/:id', getTaskById)
route.put('/:id', updateTaskById)
route.delete('/:id', deleteTaskById)


module.exports = route