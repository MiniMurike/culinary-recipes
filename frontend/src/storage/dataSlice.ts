import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        isLoaded: false,
        categories: []
    },
    reducers: {
        set: (state, action) => {
            state.isLoaded = true
            state.categories = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { set } = dataSlice.actions

export default dataSlice.reducer

