import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pulled: false
}

const slice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {

    }
})

// Export reducers

export default slice.reducer 