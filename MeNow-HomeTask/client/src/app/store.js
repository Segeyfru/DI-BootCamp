
import { configureStore, } from "@reduxjs/toolkit";
import imagesReducer  from "../features/search/slice.js";


const store = configureStore({
    reducer:{
        imagesReducer,
    }
})

export default store