const {db} = require('../config/data.js')

const _getAllTasks = () =>{
    return db('tasks').select('id','name','completed').orderBy('id')
}

const _getTaskById = (task_id) =>{
    return db('tasks').select('id','name','completed').where({id:task_id})
}

const _createTask = (task_name,task_completed) =>{
    return db('tasks').insert({name:task_name,completed:task_completed},['id','name','completed'])
}

const _updateTaskById = (task_id,task_name,task_completed) =>{
    return db('tasks').update({name:task_name,completed:task_completed},['id','name','completed']).where({id:task_id})
}

const _deleteTaskById = (task_id) =>{
    return db('tasks').del().where({id:task_id}).returning('*')
}

module.exports = {
    _getAllTasks,
    _getTaskById,
    _createTask,
    _updateTaskById,
    _deleteTaskById,
}