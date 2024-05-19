import {createSelector} from '@reduxjs/toolkit'
import {useSelector, useDispatch} from "react-redux"
import { useCallback } from 'react'
import { getPosts, } from './postsSlice'

import { state } from './postsSlice'

export const usePostsSelector =()=>{
    const selectorPosts = createSelector(state, (state) =>state.posts);
    return useSelector(selectorPosts)
}

export const usePostsStatus =()=>{
    const selectorStatus = createSelector(state, (state) => state.status)
    return useSelector(selectorStatus)
}

export const useFetchPosts = () =>{
    const dispatch = useDispatch();
    return useCallback(() =>{
dispatch(getPosts())
    },[dispatch])
}