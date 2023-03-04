import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
};

export const articleSlice = createSlice({
  name: "artice",
  initialState,
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload;
      
    },
  },
});

export const { getArticleStart, getArticleSuccess, getArticleFailure } = articleSlice.actions;
export default articleSlice.reducer;
