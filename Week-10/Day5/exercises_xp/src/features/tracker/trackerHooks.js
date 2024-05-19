import {createSelector} from '@reduxjs/toolkit'
import { useSelector,useDispatch } from 'react-redux'

import { state } from './trackerSlice'

export const useTasksSelector = () =>{
    const allTasks = createSelector(state, (state) =>state.tasks)
    return useSelector(allTasks)
}

export const useCompletedSelector = () =>{
    const completedTasks = createSelector(state, (state) =>state.tasks.filter(task=> task.isCompleted===true))
    return useSelector(completedTasks)
}




export const useCategorySelector = () =>{
    const category = createSelector(state, (state) =>state.category)
    return useSelector(category)
}
