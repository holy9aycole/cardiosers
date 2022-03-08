import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  gallery: [],
  pulled: false,
};

const slice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getGallerySuccess(state, action) {
      state.gallery = action.payload;
      state.pulled = moment.toString();
      return state;
    },
  },
});

// Export reducers

export default slice.reducer;

// Export action

export const { getGallerySuccess } = slice.actions;
