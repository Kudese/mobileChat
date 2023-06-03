import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  authStateChanged,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../FireBase/firebaseOperation";
import { async } from "@firebase/util";
import { auth } from "../FireBase/config";
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

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = persistReducer(persistConfig, slice.reducer);

export const store = configureStore({
  reducer,
  preloadedState: {
    name: null,
    userid: null,
    userEmail: null,
    photoURL: null,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
