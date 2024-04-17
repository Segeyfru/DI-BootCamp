const express = require('express')
const{
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
} = require('../controller/tasks_controller.js')

const route = express.Router()

route.get('/', getAllTasks)
route.get('/:id', getTaskById)
route.post('/', createTask)
route.put('/:id', updateTaskById)
route.delete('/:id', deleteTaskById)

module.exports = route