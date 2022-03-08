import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  pulled: false,
  category: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategorySuccess(state, action) {
      state.category = action.payload;
      state.pulled = moment().toISOString();
      return state;
    },
  },
});

// Export Reducer
export default slice.reducer;

export const { getCategorySuccess } = slice.actions;
