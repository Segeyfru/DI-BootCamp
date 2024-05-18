import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer:{
        usersReducer,
        counterReducer
    }
})

export default store