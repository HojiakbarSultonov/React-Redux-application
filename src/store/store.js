import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from './../slice/auth';
import ArticleReducer from '../slice/article'

export default configureStore({
    reducer:{
     auth: authSlice,
     article: ArticleReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
}) 