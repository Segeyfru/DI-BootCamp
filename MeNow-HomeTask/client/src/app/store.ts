
import { configureStore, } from "@reduxjs/toolkit";
import gamesReducer  from "../features/games/games_slice.ts";


const store = configureStore({
    reducer:{
        gamesReducer,
    }
})

export default store