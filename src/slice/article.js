import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail:null,
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
      state.isLoading = false;
      
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false
    },
  },
});

export const { getArticleStart, getArticleSuccess, getArticleFailure, getArticleDetailFailure, getArticleDetailSuccess, getArticleDetailStart } = articleSlice.actions;
export default articleSlice.reducer;
