import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoleEnum } from "@repo/shared/enums";

import { RootState } from "../store";

export interface AuthState {
  uuid: string;
  login: string;
  userRoles: UserRoleEnum[];
  accessToken: string;
  loggedOut: boolean;
}

export const initialState: AuthState = {
  uuid: "",
  login: "",
  userRoles: [],
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
  },
});

export const actions = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
