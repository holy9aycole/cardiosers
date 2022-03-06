import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pulled: "false",
  profile: {},
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileDetails(state, action) {
      state.profile = action.payload;
      return state;
    },
    updateProfileDetails(state, action) {
      state.profile = action.payload;
      return state;
    },
  },
});

// Export Reducer
export default slice.reducer;

export const { getProfileDetails, updateProfileDetails } = slice.actions;
