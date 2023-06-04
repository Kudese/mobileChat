import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registrationThunk } from "./asyncThunk";

const slice = createSlice({
    name: "redux",
    initialState: {
      name: null,
      userid: null,
      userEmail: null,
      photoURL: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginThunk.fulfilled, (state, { payload }) => {
          state.userid = payload.uid;
          state.name = payload.displayName;
          state.photoURL = payload.photoURL;
          state.userEmail = payload.email;
        })
        .addCase(loginThunk.rejected, (state, data) => {})
        .addCase(registrationThunk.fulfilled, (state, { payload }) => {
          state.userid = payload.user.uid;
          state.name = payload.user.displayName;
          state.photoURL = payload.user.photoURL;
          state.userEmail = payload._tokenResponse.email;
        })
        .addCase(logoutThunk.fulfilled, (state, data) => {
          return (state = {
            name: null,
            userid: null,
            userEmail: null,
            photoURL: null,
          });
        });
    },
  });
  export default slice