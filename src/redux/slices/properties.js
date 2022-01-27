import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
    properties: [],
    pulled: 'false'
}

const slice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        getPropertiesSuccess(state, action) {
            state = { properties: action.payload, pulled: moment().toISOString() }
            return state
        }
    }
})

// Export Reducer
export default slice.reducer

// Export action
export const { getPropertiesSuccess } = slice.actions;
