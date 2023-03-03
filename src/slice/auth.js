import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error:null,
  user: null,
};

console.log(initialState);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Login
    loginUserStart: (state) => {
      (state.isLoading = true);
    },
    // loginUserSuccess: (state) => {},
    // loginUserFailure: (state) => {},

    //register
    registerUserStart:(state)=>{
        (state.isLoading = true);
    },
    registerUserSuccess:(state)=>{
      state.loggedIn = true
      state.isLoading = false
    },
    registerUserFailure:(state)=>{
      state.isLoading = false
      state.error = "error"
    },
  },
});

export const { loginUserStart, registerUserStart, registerUserSuccess, registerUserFailure} = authSlice.actions;
export default authSlice.reducer;
