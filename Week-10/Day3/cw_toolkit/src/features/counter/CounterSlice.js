import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    count1: 0
}
export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res(101);
            rej(-1);
        }, 3000)
    });
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            action.payload ? state.count += 1 : state.count1 += 1;
        },
        increment1: (state) => {
            state.count1 += 1
        },
        incrementBy: (state, action) => {
            state.count += parseInt(action.payload.num);
        },
        incrementWIthPrepare: {
            reducer(state, action) {
                state.count += action.payload.num1 + action.payload.num2
            },
            prepare(param1, param2) {
                return { payload: { num1: param1, num2: param2 } }
            }
        },
        decrement: (state) => {

            state.count -= 1
        },
        decrementBy: (state, val) => {
            state.count -= parseInt(val.payload.num);
        },
        reset: (state) => {
            state.count = 0
        },

        // delayIncrement:(state) =>{
        //     setTimeout(()=>{
        //         state.count += 101;
        //     },3000)
        // },
    },
    extraReducers(builder){
        builder
        .addCase(delayIncrementThunk.pending,(state,action)=>{
            state.count +=4
        })
        .addCase(delayIncrementThunk.fulfilled,(state,action)=>{
            state.count += action.payload
        })
        .addCase(delayIncrementThunk.rejected, (state,action)=>{
            console.log(action);
            state.count += Number(action.error.message)
        })
    }
})


export const { 
    increment,
    decrement,
    reset,
    incrementBy,
    decrementBy,
    incrementWIthPrepare,
    increment1,
} = counterSlice.actions;

export default counterSlice.reducer;