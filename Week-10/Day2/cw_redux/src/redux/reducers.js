import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
    count: 5,
    // tasks: [
    //   { name: 'todo' }
    // ],

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload }
        case DECREMENT:
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}