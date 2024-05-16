import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    status: '',
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
    initialState: initialState,
    reducers: {
        adduser: (state, action) => {
            state.users.push({ id: nanoid(), name: action.payload })
        },
        addUserPrepare: {
            reducer(state, action) {
                state.users.push(action.payload)
            },
            prepare(first, second) {
                return {
                    payload: { id: nanoid(), name: first + ' ' + second }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload);
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.users = action.error.message
            })
    }
})
export const { adduser, addUserPrepare } = usersSlice.actions;

export default usersSlice.reducer