import {createSelector} from '@reduxjs/toolkit'
import {useDispatch,useSelector} from 'react-redux'
import { useCallback } from 'react'
import { state, } from './booksSlice'

export const useBooksSelector = ()=>{
    const selectBooks = createSelector(state,(state) =>state.books)
    return useSelector(selectBooks)
}
export const useSelectRomanceBooks = () =>{
    const selectRomanceBooks = createSelector(state, (state) => state.books.filter(book =>{
        return book.genre.toLowerCase() === 'romance'
    }))
    return useSelector(selectRomanceBooks)
}
export const useSelectFantasyBooks = () =>{
    const selectFantasyBooks = createSelector(state, (state) => state.books.filter(book =>{
        return book.genre.toLowerCase() === 'fantasy'
    }))
    return useSelector(selectFantasyBooks)
}
export const useSelectScienceFictionBooks = () =>{
    const selectScienceFictionBooks = createSelector(state, (state) => state.books.filter(book =>{
        return book.genre.toLowerCase() === 'fiction'
    }))
    return useSelector(selectScienceFictionBooks)
}