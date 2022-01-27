import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pulled: 'false'
}

const slice = createSlice({
    name: 'forum',
    initialState,
    reducers: {

    }
})

// Export Reducer
export default slice.reducer
