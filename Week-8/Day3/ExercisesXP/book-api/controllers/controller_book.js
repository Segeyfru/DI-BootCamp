const {
    _getAllBooks,
    _getBookById,
    _createNewBook,
    _deleteNewBook,
} = require('../models/model_book.js')


const getAllBooks = async(req, res) =>{
    try {
        const allBooks = await _getAllBooks()
        if(!allBooks){
            return res.json({message: 'Books not found'})
        }
        console.log(allBooks);
        res.status(200).json(allBooks)
        

    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

const getBookById = async(req,res) =>{
    const {id } = req.params
    try {
        const bookById = await _getBookById(id)
        console.log(bookById);
        if(!bookById){
            return res.status(404).json({message: 'Book not found' })
        }
        res.json(bookById)
        
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

const createNewBook =async(req,res) =>{
    const {title, author, publishedYear} = req.body

    try{
        const newBook = await _createNewBook(title, author, publishedYear)
        return res.json(newBook)


    }catch (error) {
        console.log(error);
        res.status(404).json(error)
    }

}

const deleteNewBook =async(req,res)=>{
    const {id} = req.params
    try{
        const delBook = await _deleteNewBook(id)
        res.json({message:'Book Deleted Successfully',delBook})

    }catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createNewBook,
    deleteNewBook,
}