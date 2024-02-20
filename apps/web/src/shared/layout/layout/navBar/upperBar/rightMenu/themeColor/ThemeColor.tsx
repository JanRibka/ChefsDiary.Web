import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";

import { ThemeProviderContext } from "@repo/radix-theme/ThemeProvider";

const ThemeColor = () => {
  const xxxxx = useContext(ThemeProviderContext);

  return <button onClick={() => {}}>ghg</button>;
};

export default ThemeColor;
