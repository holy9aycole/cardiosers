import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: null,
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getInitialize(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export default slice.reducer;

export const { userSuccess, getInitialize } = slice.actions;
