import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { state } from './booksSlice';
import { useBooksSelector, useSelectFantasyBooks, useSelectRomanceBooks, useSelectScienceFictionBooks } from './booksHooks';

const Books = (props) => {
    const books = useBooksSelector()
    const fantasy = useSelectFantasyBooks();
    const romance = useSelectRomanceBooks();
    const fiction = useSelectScienceFictionBooks();

    if (props.genre === 'romance') {
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
    } else if (props.genre === 'fantasy') {
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
    } else if (props.genre === 'fiction') {
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

export default Books