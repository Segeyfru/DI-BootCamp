const express = require('express')
const route = require('./routers/blog_routes.js')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3001, () => console.log('Run on 3001'))

app.use('/posts', route)