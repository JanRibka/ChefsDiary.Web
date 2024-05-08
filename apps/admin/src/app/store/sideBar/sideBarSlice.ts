import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface SideBarState {
  open: boolean;
}

export const initialState: SideBarState = {
  open: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        open: action.payload,
      };
    },
  },
});

export const actions = sideBarSlice.actions;

export default sideBarSlice.reducer;

// Selectors
export const selectSideBar = (state: RootState) => state.sideBar;
