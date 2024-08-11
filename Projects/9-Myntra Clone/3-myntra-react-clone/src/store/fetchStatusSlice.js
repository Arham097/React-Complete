import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStauts',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true
    },
    markFetchingDone: (state) => {
      return state.currentlyFetching = false
    }
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;