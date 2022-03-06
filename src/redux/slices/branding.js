import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
    pulled: 'false',
    branding: []
}

const slice = createSlice({
    name: 'branding',
    initialState,
    reducers: {
        getBrandingSuccess(state, action) {
            state = { branding: action.payload, pulled: moment().toISOString() }
            return state;
        }
    }
})

// Export Reducer
export default slice.reducer

export const { getBrandingSuccess } = slice.actions;
