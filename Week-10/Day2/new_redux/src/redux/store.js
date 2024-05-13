import {configureStore} from "@reduxjs/toolkit";

import { exampleReducer } from "./reducers";

const store = configureStore({
    reducer:{
        exampleReducer
    }
})
export default store