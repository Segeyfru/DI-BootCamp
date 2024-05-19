import {createAsyncThunk, createSlice, createSelector} from '@reduxjs/toolkit'
import{useSelector} from 'react-redux'

const initialState = {
    books:[
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genre: "Fiction"
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          genre: "Dystopian"
        },
        {
          id: 3,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genre: "Romance"
        },
        {
          id: 4,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          genre: "Classic"
        },
        {
          id: 5,
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          genre: "Fiction"
        },
        {
          id: 6,
          title: "Moby-Dick",
          author: "Herman Melville",
          genre: "Adventure"
        },
        {
          id: 7,
          title: "War and Peace",
          author: "Leo Tolstoy",
          genre: "Historical"
        },
        {
          id: 8,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          genre: "Fantasy"
        },
        {
          id: 9,
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          genre: "Philosophical"
        },
        {
          id: 10,
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          genre: "Fantasy"
        }
      ]
      
}

export const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{

    },


})
export const state = (state) => state.booksReducer

export const {

} = booksSlice.actions

export default booksSlice.reducer