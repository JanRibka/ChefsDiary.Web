import { ReactNode } from "react";

interface AppIconProps {
  icon: ReactNode;
  disableScaleOnHover?: boolean;
  onClick?: () => void;
}

export default AppIconProps;
