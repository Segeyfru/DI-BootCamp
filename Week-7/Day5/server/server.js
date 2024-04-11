// const http = require('http')

    // const server = http.createServer((request,response)=> {
    //     console.log(request.method);
    //     response.end('<h1>Hello from my node server</h1>')
    // })

    // server.listen(5000);

//
const fs = require('fs')
const express = require('express')
const products = require('./data.js')
const app = express();

app.listen(3001, () => {
    console.log('Run on 3001');
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

/** 
 * CRUD -Create, Read, Update, Delete
 * app.get - GET - retrieve data 
 * app.post - POST - send new data
 * app.delete - DELETE - to delete data
 * app.put - PUT - modify data
 */


app.get('/users', (request, response) =>{
    response.send(users)
    // response.json(users);
    // response.send('<h1>Hello from express server</h1>')
})

/** Create - POST - to create a new products */
app.post('/api/products', (req, res) =>{
    console.log(req.body);
    products.push(req.body);
    res.send(products)
});

/** Update - PUT - modify data
 * id -> params
 * data -> name, price -> json in body
 * 
*/

app.put('/api/products/:id', (req, res) =>{
    const { id } = req.params
    const {name,price} = req.body;
    let index = products.findIndex((item) => item.id == id)
    if(index === -1){
        return res.status(404).json({"msg": "product not found"})
    }
    products[index] ={
        ...products[index],
        name,price
    }
    res.json(products);
})

/** app.delete - DELETE - to delete data*/

app.delete('/api/products/:id', (req, res) =>{
    const { id } = req.params
    let index = products.findIndex((item) => item.id == id)
    if(index === -1){
        return res.status(404).json({"msg": "product not found"})
    }
    products.splice(index,1)
    res.json(products);
})


/** to GET data */

app.get('/api/products', (request, response) =>{
    response.send(products)
})

app.get('/api/products/:id', (request, response) =>{
    console.log(request.params.id);
    // response.send(products)
    // response.send('OK')


    products.forEach(product => {
        console.log(product.id);
        if(`${product.id}` === `${request.params.id}`){
            response.send(product)
        }
    })
    response.send('Product not found')


    let product = products.find((item) => item.id == request.params.id)
    if(!product){
        return response.sendStatus(404)
    }
    response.status(200).json(product)
});

/** read - get - 
 * ip -> 
 */
app.get('/api/search', (request, response) => {
    let {q} = request.query;
    // response.send('Ok')
    let filtered = products.filter(item => {
        return item.name.toLowerCase().includes(q.toLowerCase())
    } )
    if(filtered.length === 0){
        return response.status(404).json({msg:'no product match your search'})
    }
    response.status(200).json(filtered);
})

