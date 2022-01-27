import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
    pulled: 'false'
}

const slice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getProperties(state, action) {
            state = { ...action.payload, pulled: moment().toISOString() }
            return state
        }
    }
})

// Export Reducer
export default slice.reducer

// Actions
export const { getProperties } = slice.actions
