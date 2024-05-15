import {configureStore} from '@reduxjs/toolkit'
import { taskReducer } from '../features/tasks/tasksReducers'

const store = configureStore({
    reducer:{
        reducer:taskReducer,
    }
})

export default store