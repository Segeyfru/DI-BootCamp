import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    allImages: [],
    filteredImages: [],

    status: 'Success',
}





export const getAllData = createAsyncThunk('data/all',
    async () => {
        try {

            const response = await axios.get(`${import.meta.env.VITE_URL}/all`);
            console.log(response.data);
            return response.data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Axios error', error.message);
                console.log('Axios error', error);
            } else {
                console.error('Unexpected error', error);
            }

        }
    }
)

export const updateImages = createAsyncThunk('data/updateimage',
    async ({ id, likeDislike }) => {
        try {
            const updatedDate = await axios.put(`${import.meta.env.VITE_URL}/update`,
                { id, likeDislike },
                { withCredentials: true }
            )

            return updatedDate.data
        } catch (error) {

            if (axios.isAxiosError(error)) {
                console.log('Axios error', error.message);
                console.log('Axios error', error);


            } else {
                console.error('Unexpected error', error);
            }

        }
    }
)



export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        randomImages: (state, action) => {
            state.filteredImages = []
            while (state.filteredImages.length < 5) {
                const randomIndex = Math.floor(Math.random() * state.allImages.length)
                const randomImage = state.allImages[randomIndex]
                console.log(randomImage);
                if (!state.filteredImages.includes(randomImage)) {
                    console.log('in IF');
                    state.filteredImages.push(randomImage)
                }
            }
            state.filteredImages.sort((a, b) => b.score - a.score)
        },
        searchByKeyWord: (state, action) => {

            if (action.payload === '') {
                state.filteredImages = state.allImages
                return
            }
            state.filteredImages = state.allImages.filter(image => {
                if (image.keywords.some(keyword =>
                    keyword.toLowerCase().includes(`${action.payload.toLowerCase()}`))) {

                    return image
                }

            })
            state.filteredImages.sort((a, b) => b.score - a.score)
            state.filteredImages = state.filteredImages.slice(0, 5)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllData.pending, (state, actions) => {
                state.status = 'Loading'
            })
            .addCase(getAllData.fulfilled, (state, actions) => {
                state.allImages = actions.payload.sort((a, b) => b.score - a.score)
                state.filteredImages = actions.payload.sort((a, b) => b.score - a.score)
                state.status = 'Success'
            })
            .addCase(getAllData.rejected, (state, actions) => {
                state.status = 'Failed'
            })
            .addCase(updateImages.pending, (state, actions) => {
                state.status = 'Loading'
            })
            .addCase(updateImages.fulfilled, (state, actions) => {
                state.allImages = actions.payload.sort((a, b) => b.score - a.score)
                state.filteredImages = actions.payload.sort((a, b) => b.score - a.score)
                state.status = 'Success'
            })
            .addCase(updateImages.rejected, (state, actions) => {
                state.status = 'Failed'
            })

    },
})


export const {
    randomImages,
    searchByKeyWord,
} = dataSlice.actions



export default dataSlice.reducer