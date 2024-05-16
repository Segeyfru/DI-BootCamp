import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    pending:''
}

export const fetchUsers = createAsyncThunk('users/fetch', async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
return data
    // return new Promise((res,rej) =>{
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => res.json())
    //     .then(data => res(data))
    // })
})

export const usersSlice = createSlice({
    name: 'users',
    initialState:initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending,(state,action)=>{
                console.log('Pending');
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.users = action.error.message
            })
    }
})
export const  {} = usersSlice.actions;

export default usersSlice.reducer