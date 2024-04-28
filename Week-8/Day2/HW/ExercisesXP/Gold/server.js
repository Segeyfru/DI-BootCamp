const express = require('express')
const route = require('./routes/route.js')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(5000, () => console.log('Run on 5000'))

app.use('/posts', route)