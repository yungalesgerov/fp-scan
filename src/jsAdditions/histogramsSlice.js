import { createSlice } from "@reduxjs/toolkit";

export const histogramsSlice = createSlice({
  name: "histograms",
  initialState: {
    data: null,
    resultData:null
  },

  reducers: {
    responseData: (state, action) => {
      state.data = action.payload;
    },
    objectSearch: (state, action) => {
      state.resultData = action.payload;
    },
    clearData: (state) => {
      state.data = null;
      state.resultData = null;
    }
  }
});


export const {responseData, objectSearch, clearData} = histogramsSlice.actions;

export const selectData = (state) => state.histograms.resultData.resultData;

export const selectHistograms = (state) => state.histograms.data.data;

export default histogramsSlice.reducer;