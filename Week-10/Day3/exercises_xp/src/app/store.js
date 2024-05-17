import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from '../feattures/tasks/tasksSlice'
import dailyReducer from '../feattures/dailyPlaner/dailySlice'

const store = configureStore({
    reducer: {
        tasksReducer,
        dailyReducer
    }
})


export default store