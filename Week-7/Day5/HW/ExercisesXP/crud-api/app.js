const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const {fetchPosts} = require('./data/dataService.js')

app.listen(5000, ()=> console.log('Run on 5000'));

const url = 'https://jsonplaceholder.typicode.com/posts'

app.get('/posts',async (req, res)=>{
    try{

        // const posts = await fetchPosts(url)
        const posts = await fetchPosts()
        res.status(200).send(posts)
        console.log('The data has been successfully retrieved');
    }catch(err){
        res.status(404).send({error: err.message})
    }
})


// app.get('/api/posts',(req,res) =>{
//     let data = fetchPosts()
//     data.then(posts =>{
//         console.log(posts);
//         res.status(200).send(posts)
//     })
//     .catch(err => res.status(404).send({error: err.message}))
// })
