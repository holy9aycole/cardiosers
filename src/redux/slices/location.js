import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocation(state, action) {
      state.location = action.payload;
      return state;
    },
  },
});

// Export reducers

export default slice.reducer;

// Export action

export const { getLocation } = slice.actions;
