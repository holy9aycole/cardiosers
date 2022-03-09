import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
// import { useParams } from "react-router";

const initialState = {
  forum: [],
  pulled: false,
};

const slice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    getForumSuccess(state, action) {
      state.forum = action.payload;
      state.pulled = moment.toString();
    },
    updateComments(state, action) {
      const index = state.forum.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) state.forum[index] = action.payload;
    },
    deleteForumUpdate(state, action) {
      const index = state.forum.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) state.forum.filter((item) => action.payload !== item);
    },
  },
});

// Export Reducer
export default slice.reducer;

export const { getForumSuccess, updateComments, deleteForumUpdate } =
  slice.actions;
