const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
    },
];

app.listen(5000, () => console.log('Run on port 5000'));
app.get('/api/books', (req,res) =>{
    if(res.status === 404){
        res.status(404).json({msg:'server not found'})
    }
    res.status(200).json(books)
});

app.get('/api/books/:bookid',(req,res)=>{
    const {bookid} = req.params;
    let book = books.find(item => item.id == bookid)
    if(!book){
        res.status(404).json({msg:'Book not found'})
        return
    }
    res.status(200).json(book)
})

app.post('/api/books', (req,res)=>{
    const { title, author, publishedYear} = req.body
    console.log( title, author, publishedYear);
    let newBook = {
        id: books.length+1,
        title,author,publishedYear
    }
    books.push(newBook);
    console.log(res.status(201));
    res.status(200).json(books)
})