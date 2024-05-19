
import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const initialState = {
    posts: [],
    status: 'success', //loading, failed, success
}
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const res = await fetch(POST_URL)
    const data = await res.json()
    return data
})
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.posts.push(action.payload)
            },
            prepare: (title, body, userId = 1) => {
                return { payload: { id: nanoid(), title, body, userId } }
            }
        },
        addReaction:(state,action)=>{
            const {id,name} = action.payload;
            const post = state.posts.find(post => post.id ===id)
            if(post){
                post.reaction[name]++
            }
        }

    },
    extraReducers(builder) {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'success'

                const loadedPosts = action.payload.map(post => {
                    post.reaction = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post
                })


                state.posts = loadedPosts
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'Something went wrong'
            })
            .addCase(getPosts.pending, (state, action) => {
                state.status = 'Loading...'
            })

    }
})
export const {
    addReaction
} = postsSlice.actions

export const state = (state) => state.postsReducer
// export const post = (state) => state.postsReducer.status

export default postsSlice.reducer