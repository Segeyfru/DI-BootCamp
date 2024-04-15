const express = require('express')
const todos_route = require('./routes/todos.js')
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log('run on 3000');
})

app.use('/todo', todos_route)