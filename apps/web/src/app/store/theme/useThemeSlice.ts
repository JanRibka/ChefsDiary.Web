import { useAppDispatch } from "../store";
import { actions, AppTheme } from "./themeSlice";

export const useThemeSlice = () => {
  const dispatch = useAppDispatch();

  const setTheme = (theme: AppTheme) => {
    dispatch(actions.setTheme(theme));
  };

  return { setTheme };
};
