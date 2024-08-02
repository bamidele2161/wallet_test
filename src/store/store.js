import { configureStore } from "@reduxjs/toolkit";
import { UserDataReducer } from "./slice";
import { authApi } from "../services/auth";
import { userApi } from "../services/user";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    UserDataReducer: UserDataReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, userApi.middleware]),
});
