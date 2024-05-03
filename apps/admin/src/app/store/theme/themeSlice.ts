import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type AppTheme = "dark" | "light" | "system";

export interface ThemeState {
  theme: AppTheme;
}

export const initialState: ThemeState = {
  theme:
    (localStorage.getItem(
      import.meta.env.VITE_THEME_STORAGE_KEY
    ) as AppTheme) || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AppTheme>) => {
      const root = window.document.documentElement;

      root.classList.remove("light", "dark");

      if (action.payload === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";

        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(action.payload);

      localStorage.setItem(
        import.meta.env.VITE_THEME_STORAGE_KEY,
        action.payload
      );

      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const actions = themeSlice.actions;

export default themeSlice.reducer;

// Selectors
export const selectTheme = (state: RootState) => state.theme;
