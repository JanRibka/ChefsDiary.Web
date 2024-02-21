import { IoSunnyOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { RxMoon } from "react-icons/rx";

import { AppTheme } from "../../../../../../../app/store/theme/themeSlice";
import Icon from "../../../../../../styledComponents/icon/Icon";

interface IProps {
  theme: AppTheme;
  handleOnClickIcon: () => void;
}

const ThemeIcon = (props: IProps) => {
  if (props.theme === "light") {
    return <Icon icon={<IoSunnyOutline onClick={props.handleOnClickIcon} />} />;
  } else if (props.theme === "dark") {
    return <Icon icon={<RxMoon onClick={props.handleOnClickIcon} />} />;
  }

  return <Icon icon={<MdComputer onClick={props.handleOnClickIcon} />} />;
};

export default ThemeIcon;
