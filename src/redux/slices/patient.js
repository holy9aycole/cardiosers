import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  data: [],
  pulled: false,
};

const slice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    getPatientSuccess(state, action) {
      state.data = action.payload;
      state.pulled = moment.toString();
      return state;
    },
  },
});

// Export reducers

export default slice.reducer;

// Export action

export const { getPatientSuccess } = slice.actions;
