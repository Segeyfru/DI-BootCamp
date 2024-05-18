import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'

const store = configureStore({
    reducer:{
        usersReducer,
    }
})

export default store