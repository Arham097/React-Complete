import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter ",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;

    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += action.payload * 1;
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload * 1;
    }
  }
})
export const counterActions = counterSlice.actions;
export default counterSlice;