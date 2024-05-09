const express = require('express')
const cors =require('cors')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, ()=> console.log('Run on 3001'))

app.get('/api/hello', (req,res)=>{
    res.json({message:'Hello From Express'})
})

app.post('/api/world', (req,res)=>{

    const {post} = req.body

    res.send(`I received your POST request. This is what you sent me: ${post} `)

    console.log(req.body);
})

