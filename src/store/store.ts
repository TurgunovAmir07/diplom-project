import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { geoApi } from "../API/searchApi";
import { api } from "../API/defaultApi";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [geoApi.reducerPath]: geoApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([geoApi.middleware, api.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
