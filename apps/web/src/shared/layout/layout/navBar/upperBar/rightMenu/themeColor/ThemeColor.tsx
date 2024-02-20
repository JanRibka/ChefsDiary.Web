import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";

import {
  ThemeProvider,
  ThemeProviderContext,
} from "@repo/radix-theme/ThemeProvider";

const ThemeColor = () => {
  return (
    <ThemeProviderContext.Consumer>
      {(value) => {
        const xx = () => {
          const x = value.setTheme("dark");
          const theme = value.theme;
          debugger;
        };

        return <button onClick={xx}>ghg</button>;
      }}
    </ThemeProviderContext.Consumer>
  );
};

export default ThemeColor;
