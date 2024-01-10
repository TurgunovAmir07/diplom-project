import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { geoApi } from "../API/searchApi";
import { api } from "../API/defaultApi";
import { detalsApi } from "../API/detalsApi";
import { oxilorApi } from "../API/oxilorApi";

export const store = configureStore({
  reducer: {
    user: userSlice,
    name: userSlice,
    email: userSlice,
    password: userSlice,
    id: userSlice,
    [geoApi.reducerPath]: geoApi.reducer,
    [api.reducerPath]: api.reducer,
    [detalsApi.reducerPath]: detalsApi.reducer,
    [oxilorApi.reducerPath]: oxilorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      geoApi.middleware,
      api.middleware,
      detalsApi.middleware,
      oxilorApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
