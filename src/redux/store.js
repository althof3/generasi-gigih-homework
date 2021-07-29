import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import tracksReducer from "./TrackSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tracks: tracksReducer,
  },
});
