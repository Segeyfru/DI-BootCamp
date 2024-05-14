import {configureStore} from '@reduxjs/toolkit'
import { reducer } from './reducers'

const store = configureStore({
    reducer:{
        toDoList:reducer
    }
})

export default store