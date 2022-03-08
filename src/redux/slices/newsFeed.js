import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  newsFeed: [],
  pulled: false,
};

const slice = createSlice({
  name: "newsFeed",
  initialState,
  reducers: {
    getNewsFeedSuccess(state, action) {
      state.newsFeed = action.payload;
      state.pulled = moment.toString();
      return state;
    },
  },
});

// Export reducers

export default slice.reducer;

// Export action

export const { getNewsFeedSuccess } = slice.actions;
