const {db}= require('../config/data.js');
const { updateTaskById } = require('../controller/controllers.js');


const _createNewTask = async(task) =>{
    try {
        const [newTask] = await db('todos').insert(task,['id','title','completed'])
        return newTask
    } catch (error) {
        console.log('module catch', error);
        throw new Error(error)
    }
}

const _getAllTasks = async() =>{
    try{
        const allTasks = await db('todos').select('id','title','completed')
        return allTasks
    } catch (error) {
        console.log('module catch', error);
        throw new Error(error)
    }
}

const _getTaskById = async (id) =>{
    try{
        const [taskById] = await db('todos').select('id','title','completed').where({id})
        return taskById
    } catch (error) {
        console.log('module catch', error);
        throw new Error(error)
    }
}

const _updateTaskById = async(id,updatedTask) =>{
    try{
        const [task] = await db('todos').update(updatedTask,['id','title','completed']).where({id})
        return task
    } catch (error) {
        console.log('module catch', error);
        throw new Error(error)
    }
}

const _deleteTaskById = async(id) =>{
    try{
        const [deletedTask] = await db('todos').del().where({id}).returning(['id','title','completed'])
        return deletedTask
    } catch (error) {
        console.log('module catch', error);
        throw new Error(error)
    }
}


module.exports = {
    _createNewTask,
    _getAllTasks,
    _getTaskById,
    _updateTaskById,
    _deleteTaskById,
}