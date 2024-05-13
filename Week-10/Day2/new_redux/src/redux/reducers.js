import { TEXT } from "./actions";

const initialState ={
    text: "Something from store"
}

export const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT:
            return {...state,text:action.payload}
        default:
            return state;
    }
}