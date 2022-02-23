import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  forum: [],
  pulled: "false",
};

const slice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    getForumSuccess(state, action) {
      state.forum = action.payload;
      state.pulled = moment.toString();
      return state;
    },
  },
});

// Export Reducer
export default slice.reducer;

export const { getForumSuccess } = slice.actions;
