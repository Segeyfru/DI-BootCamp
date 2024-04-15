const express = require('express')
const {books} = require('../data.js')

/** { id: , title: , author:  } */
const route = express.Router()

route.get('/', (req,res)=>{
    res.json(books)
})

route.get('/:id', (req,res)=>{
    const {id} = req.params;
    let book = books.find(book => book.id == id)
    if(!book){
        res.status(404).json({ msg: "not found"})
    };
    res.json(book);
})

route.post('/', (req,res)=>{
    books.push(req.body)
    res.json(books)
})

route.put('/:id',(req,res) =>{
    const {id} = req.params;
    const {title,author} = req.body;
    let index = books.findIndex(item => item.id == id);
    if(index == -1){
        res.status(404).json({ msg: "not found" });
    }
    books[index] = {
        ...books[index],
        title,
        author
    }
    res.json(books)
})

route.delete('/:id',(req,res)=>{
    const {id} = req.params;
    let index = books.findIndex(item => item.id == id)
    if(index === -1){
        res.status(404).json({ msg: "not found" });
    }
    books.splice(index,1)
    res.json(books)
})

module.exports = route