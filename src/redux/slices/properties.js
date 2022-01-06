import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    propertyName: 'Ecoworld',
    pulled: 'false'
}

const slice = createSlice({
    name: 'properties',
    initialState,
    reducers: {

    }
})

// Export Reducer
export default slice.reducer
