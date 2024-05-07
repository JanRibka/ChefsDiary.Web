import { IoSunnyOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { RxMoon } from "react-icons/rx";

import { AppIcon } from "@repo/ui/styledComponents";

import { AppTheme } from "../../../../../../app/store/theme/themeSlice";

interface Props {
  theme: AppTheme;
  handleOnClickIcon: () => void;
}

const ThemeIcon = (props: Props) => {
  if (props.theme === "light") {
    return (
      <AppIcon icon={<IoSunnyOutline onClick={props.handleOnClickIcon} />} />
    );
  } else if (props.theme === "dark") {
    return <AppIcon icon={<RxMoon onClick={props.handleOnClickIcon} />} />;
  }

  return <AppIcon icon={<MdComputer onClick={props.handleOnClickIcon} />} />;
};

export default ThemeIcon;
