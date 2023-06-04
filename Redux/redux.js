import {
  configureStore,
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

import { async } from "@firebase/util";
import { auth } from "../FireBase/config";
import slice from "./slice";


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
