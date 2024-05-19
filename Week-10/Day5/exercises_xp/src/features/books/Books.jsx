import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { state } from './booksSlice';
import { useBooksSelector, useSelectFantasyBooks, useSelectRomanceBooks, useSelectScienceFictionBooks } from './booksHooks';

const Books = (props) => {
    
  const [genre, setGenre] = useState('all')
    const books = useBooksSelector()
    const fantasy = useSelectFantasyBooks();
    const romance = useSelectRomanceBooks();
    const fiction = useSelectScienceFictionBooks();

    const printBooks = () => {

        if (genre === 'romance') {
            return (<>
                {
                    romance.map(book => {
                        return (
                            <div key={book.id} className='book'>
                                <h2>"{book.title}"</h2>
                                <h3>{book.author}</h3>
                                <p>{book.genre}</p>
                            </div>
                        )
                    })
                }
            </>)
        } else if (genre === 'fantasy') {
            return (<>
                {
                    fantasy.map(book => {
                        return (
                            <div key={book.id} className='book'>
                                <h2>"{book.title}"</h2>
                                <h3>{book.author}</h3>
                                <p>{book.genre}</p>
                            </div>
                        )
                    })
                }
            </>)
        } else if (genre === 'fiction') {
            return (<>
                {
                    fiction.map(book => {
                        return (
                            <div key={book.id} className='book'>
                                <h2>"{book.title}"</h2>
                                <h3>{book.author}</h3>
                                <p>{book.genre}</p>
                            </div>
                        )
                    })
                }
            </>)
        } else {
            return (
                <>
                    {
                        books.map(book => {
                            return (
                                <div key={book.id} className='book'>
                                    <h2>"{book.title}"</h2>
                                    <h3>{book.author}</h3>
                                    <p>{book.genre}</p>
                                </div>
                            )
                        })
                    }
                </>
            )
        }
    }

    return(
        <>
        <select onChange={(e)=>setGenre(e.target.value)}>
      <option value="all">All</option>
      <option value="fiction">Science Fiction</option>
      <option value="fantasy">Fantasy</option>
      <option value="romance">Romance</option>
    </select>
    {printBooks()}
        </>
    )
}

export default Books