
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit"


const initialState = {
    users: [
        
    ],

}

export const getUsers = createAsyncThunk('users/featch',async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users?')
    const date = await res.json()
    return date
})



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({ id: nanoid(), name: action.payload.name })
        },
    },
    extraReducers(builder){
        builder
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.users = action.payload
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.users = [{name:action.error.message}]
        })
    }
})

export const {
    addUser,
} = usersSlice.actions

export default usersSlice.reducer
