import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { mainBaseApi } from "../../shared/api/mainBaseApi";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";

export const rootReducer = combineReducers({
  [mainBaseApi.reducerPath]: mainBaseApi.reducer,
  theme: themeReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([]).concat(mainBaseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
