import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  profile: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { profile, newToken } = action.payload;
      state.token = newToken;
      state.profile = profile;
    },

    logout: (state) => {
      state.token = initialState.token;
      state.profile = initialState.profile;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
