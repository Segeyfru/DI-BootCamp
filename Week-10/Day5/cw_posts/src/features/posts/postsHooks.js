import {createSelector} from '@reduxjs/toolkit'
import {useSelector, useDispatch} from "react-redux"
import { useCallback } from 'react'
import { getPosts, status } from './postsSlice'

import { posts } from './postsSlice'

export const usePostsSelector =()=>{
    const selectorPosts = createSelector((posts), (posts) =>posts);
    return useSelector(selectorPosts)
}

export const usePostsStatus =()=>{
    const selectorStatus = createSelector(status, (status) => status)
    return useSelector(selectorStatus)
}

export const useFetchPosts = () =>{
    const dispatch = useDispatch();
    return useCallback(() =>{
dispatch(getPosts())
    },[dispatch])
}