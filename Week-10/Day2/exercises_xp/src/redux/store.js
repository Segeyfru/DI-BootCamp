import {configureStore} from "@reduxjs/toolkit";
import { exercise_1_reducer} from './reducers.js'


const store = configureStore({
    reducer:{
        reducer: exercise_1_reducer
    }
})

export default store