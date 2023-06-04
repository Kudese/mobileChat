import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  authStateChanged,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../FireBase/firebaseOperation";


export const loginThunk = createAsyncThunk(
    "login",
    async ({ userEmail, userPassWord }) => {
      const data = await loginDB({ userEmail, userPassWord });
      return data;
    }
  );
  
  export const registrationThunk = createAsyncThunk(
    "registration",
    async ({ userEmail, userPassWord, userName }) => {
      const data = await registerDB({ userEmail, userPassWord });
      const user = await updateUserProfile({ displayName: userName });
  
      return data;
    }
  );
  export const logoutThunk = createAsyncThunk("logout", async () => {
    authStateChanged();
  });
  