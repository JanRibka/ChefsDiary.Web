import { useSelector } from "react-redux";

import {
  AppTheme,
  selectTheme,
} from "../../../../../../app/store/theme/themeSlice";
import { useThemeSlice } from "../../../../../../app/store/theme/useThemeSlice";
import ThemeIcon from "./ThemeIcon";

const ThemeColor = () => {
  const theme = useSelector(selectTheme);
  const { setTheme } = useThemeSlice();

  // Other
  const handleOnClickThemeChange = () => {
    const newTheme: AppTheme = theme.theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  return (
    <ThemeIcon
      theme={theme.theme}
      handleOnClickIcon={handleOnClickThemeChange}
    />
  );
};

export default ThemeColor;
