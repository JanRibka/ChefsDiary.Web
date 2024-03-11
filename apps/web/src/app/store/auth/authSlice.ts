import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRoleEnum } from "@repo/shared/enums";

import { RootState } from "../store";

export interface AuthState {
  idUser: number;
  userName: string;
  password: string;
  userRole: UserRoleEnum;
  accessToken: string;
}

export const initialState: AuthState = {
  idUser: 0,
  userName: "",
  password: "",
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
