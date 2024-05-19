import { configureStore } from '@reduxjs/toolkit'

import booksReducer  from '../features/books/booksSlice'
import trackerReducer from '../features/tracker/trackerSlice'

const store = configureStore({
    reducer:{
        booksReducer,
        trackerReducer
    }
})

export default store