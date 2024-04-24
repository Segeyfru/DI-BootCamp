const {db } =  require('../config/data.js')

const _getAllBooks = async()=>{
    try {
        const books = await db('books').select('id','title','author','publishedYear')
        return books

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

const _getBookById = async(id)=>{
    try{
        const book = await db('books').select('id','title','author','publishedYear').where({id}).first()

        return book
    }catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

const _createNewBook = async(title, author, publishedYear) =>{
    try{
        const newBook = await db('books').insert({title, author, publishedYear},['id','title','author','publishedYear'])
        return newBook
    }catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

const _deleteNewBook = async(id)=>{
    try{
        const delBook = await db('books').del('*').where({id}).returning(['id','title','author','publishedYear'])
        return delBook
    }catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


module.exports = {
    _getAllBooks,
    _getBookById,
    _createNewBook,
    _deleteNewBook,
}