import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    status:'successfully'
}
export const ageDownAsync = createAsyncThunk('ageCounter/downAsync',()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(-1)
        },500)
    })
})
export const ageDownAsyncRej = createAsyncThunk('ageCounter/downAsyncRej',()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(-1)
        },500)
    })
})

export const ageUpAsync = createAsyncThunk('ageCounter/upAsync',()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1)
        },800)
    })
}) 
export const counterSlice = createSlice({
    name:'ageCounter',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(ageDownAsync.pending,(state,action)=>{
            state.status = 'Loading...'
        })
        .addCase(ageDownAsync.fulfilled,(state,action)=>{
            state.status = 'successfully'
            state.count += Number(action.payload)
        })
        .addCase(ageDownAsync.rejected,(state,action)=>{
            state.status = 'Something went wrong.'
        })
        .addCase(ageDownAsyncRej.pending,(state,action)=>{
            state.status = 'Loading...'
        })
        .addCase(ageDownAsyncRej.fulfilled,(state,action)=>{
            state.status = 'successfully'
            state.count += Number(action.payload)
        })
        .addCase(ageDownAsyncRej.rejected,(state,action)=>{
            state.status = 'Something went wrong.'
        })
        .addCase(ageUpAsync.pending,(state,action)=>{
            state.status = 'Loading...'
        })
        .addCase(ageUpAsync.fulfilled,(state,action)=>{
            state.status = 'successfully'
            state.count += Number(action.payload)
        })
        .addCase(ageUpAsync.rejected,(state,action)=>{
            state.status = 'Something went wrong.'
        })
    }
})

export const {

} = counterSlice.actions

export default counterSlice.reducer