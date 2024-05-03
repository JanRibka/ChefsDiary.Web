import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface AuthState {
  login: string;
  accessToken: string;
  loggedOut: boolean;
}

export const initialState: AuthState = {
  login: "",
  accessToken: "",
  loggedOut: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Partial<AuthState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const actions = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
