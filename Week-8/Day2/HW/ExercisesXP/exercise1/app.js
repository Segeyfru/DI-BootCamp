const express = require('express')
const index_route = require('./routes/index.js')
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log('run on 3000');
})

