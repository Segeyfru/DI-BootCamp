const {
    _createNewTask,
    _getAllTasks,
    _getTaskById,
    _updateTaskById,
    _deleteTaskById,

} = require('../models/models.js')

const createNewTask = async(req,res) =>{
    
    const task = JSON.parse(JSON.stringify(req.body))
    try {
        const newTask = await _createNewTask(task);
        return res.status(200).json({message: 'Your task created successfully', newTask})
    } catch (error) {
        res.status(404).json(error)
    }
}

const getAllTasks = async (req,res) =>{
    try{
        const allTasks = await _getAllTasks();

        if(!allTasks){
            return res.status(404).json({message: 'Tasks not found'})
        }

        res.status(200).json(allTasks)
    } catch (error) {
        res.status(404).json(error)
    }
}

const getTaskById = async(req,res) =>{
    const {id} = req.params
    try{
        const taskById = await _getTaskById(id)

        if(!taskById){
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(200).json(taskById)

    } catch (error) {
        res.status(404).json(error)
    }
}

const updateTaskById = async(req,res) =>{
    const {id} = req.params
    const updatedTask = JSON.parse(JSON.stringify(req.body))
    try{
        const task = await _updateTaskById(id, updatedTask)

        if(!task){
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(200).json(task)

    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteTaskById = async(req,res) => {
    const {id} = req.params
    try{
        const deletedTask = await _deleteTaskById(id)
        res.json({message:'Task deleted successfully', deletedTask})
    } catch (error) {
        res.status(404).json(error)
    }

}



module.exports = {
    createNewTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,

}