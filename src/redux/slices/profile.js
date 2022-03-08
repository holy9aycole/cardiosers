import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  pulled: false,
  profile: {},
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileDetails(state, action) {
      state.profile = action.payload;
      state.pulled = moment().toISOString();
      return state;
    },
    updateProfileDetails(state, action) {
      state.profile = action.payload;
      state.pulled = moment().toISOString();
      return state;
    },
  },
});

// Export Reducer
export default slice.reducer;

export const { getProfileDetails, updateProfileDetails } = slice.actions;
