import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoleEnum } from "@repo/shared/enums";

import { RootState } from "../store";

export interface AuthState {
  userUuid: string;
  userName: string;
  userRole: UserRoleEnum;
  accessToken: string;
}

export const initialState: AuthState = {
  userUuid: "",
  userName: "",
  userRole: UserRoleEnum.UNDEFINED,
  accessToken: "",
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
