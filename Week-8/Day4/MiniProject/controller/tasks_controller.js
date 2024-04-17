const {
    _getAllTasks,
    _getTaskById,
    _createTask,
    _updateTaskById,
    _deleteTaskById,
} = require('../models/tasks_models.js')


const getAllTasks = (req, res) => {
    _getAllTasks()
        .then(data => res.json(data))
        .catch(err => {
            res.status(404).json({ msg: 'something went wrong' })
            console.log(err)
        })
}
const getTaskById = (req, res) => {
    const { id } = req.params;
    _getTaskById(id)
        .then(data => res.json(data))
        .catch(err => {
            res.status(404).json({ msg: 'something went wrong' })
            console.log(err)
        })
}
const createTask = (req, res) => {
    const { name, completed } = req.body;
    _createTask(name, completed)
        .then(data => res.json(data))
        .catch(err => {
            res.status(404).json({ msg: 'something went wrong' })
            console.log(err)
        })
}

const updateTaskById = (req,res) =>{
    const {id} = req.params
    const {name, completed} =req.body
    _updateTaskById(id,name,completed)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({ msg: 'something went wrong' })
        console.log(err)
    })
}

const deleteTaskById = (req,res) =>{
    const {id} = req.params
    _deleteTaskById(id)
    .then(data => res.json(data))
    .catch(err => {
        res.status(404).json({msg: 'something went wrong'})
        console.log(err);
    })
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
}