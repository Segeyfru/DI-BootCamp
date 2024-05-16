import { configureStore } from '@reduxjs/toolkit'

import counterReducer from  '../features/counter/CounterSlice'
import usersReducer from '../features/users/UsersSlice'

export default configureStore({
    reducer:{
        counterReducer,
        usersReducer,
    }
})