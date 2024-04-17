const express = require('express')
// const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs');

app.listen(process.env.PORT||3001, () =>{
    console.log(`Run on ${process.env.PORT || 3001} `);
})

app.get('/demo', (req,res) =>{

    let user = {
        firstName: 'John',
        lastName: 'Due'
    }
    let login = false
    res.render('index', {
        user,
        login
    })
})
app.get('/shop', (req,res) =>{
    res.render('shop')
})