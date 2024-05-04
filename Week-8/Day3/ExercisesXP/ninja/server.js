const express = require('express')
const cors = require('cors')
const session = require('express-session')

const route = require('./routes/routes.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
    secret: 'how__iT_Works',
    resave: false,
    saveUninitialized: false
}))

app.use(cors())

app.listen(3001, () => console.log('Run on 3001'))

app.use('/', route)