import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceTypes {
  token: string;
  profile: {
    img: { url: string };
    name: string;
    id: string;
  } | undefined;
}
const initialState: AuthSliceTypes = {
  token: "",
  profile: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthSliceTypes>) => {
      const { profile, token } = action.payload;
      state.token = token;
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
