import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import tracksReducer from "./TrackSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tracks: tracksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch