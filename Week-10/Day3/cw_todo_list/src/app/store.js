import { configureStore } from "@reduxjs/toolkit"
import { taskReducer } from "../features/tasks/taskReducers"

const store = configureStore({
    reducer: {
        taskReducer,
    },
})



export default store