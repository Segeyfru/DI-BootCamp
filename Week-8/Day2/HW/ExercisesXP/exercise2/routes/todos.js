const express = require('express')
const {todos} = require('../data.js')

const route = express.Router()

route.get('/', (req,res) => {
    res.json(todos);
})

route.post('/',  (req,res) => {
    todos.push(req.body)
    res.json(todos)
})

route.put('/:id',(req,res)=>{
    const {id} = req.params
    const {title, completed} = req.body
    let ind = todos.findIndex(item => item.id == id)
    if(ind === -1){
        res.status(404).json({msg:"not found"})
    }
    todos[ind] ={...todos[ind],title,completed}
    res.json(todos)
})

route.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const index = todos.findIndex(item => item.id == id);
    if(index === -1){
        res.status(404).json({msg:"not found"})
    }

    todos.splice(index,1)
    res.json(todos)
})

module.exports = route