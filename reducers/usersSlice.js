import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userSlice",
  initialState: { data: [], totalPages: 0, currentPage: 1, testPage: 100, myPage: 99},
  reducers: {
    
    loadData: (state, action) => {
      // debugger
      if (action.payload.page == 1) {
        state.data = action.payload.data;
      } else {
        state.data = [...state.data, ...action.payload.data];
      }
      state.totalPages = action.payload.total_pages;
      state.currentPage = action.payload.page;
    },
  },
});

export const { loadData } = usersSlice.actions;

export default usersSlice.reducer;