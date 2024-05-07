import { forwardRef } from "react";

import AppIconProps from "./AppIconProps";

const AppIcon = forwardRef<HTMLDivElement, AppIconProps>((props, ref) => {
  const { icon, ...restProps } = props;

  return (
    <div
      {...restProps}
      ref={ref}
      className={`flex items-center cursor-pointer text-primary transition 300ms ease-in-out hover:text-primary-dark ${props.disableScaleOnHover ? "" : "hover:scale-125"}`}
    >
      {icon}
    </div>
  );
});

export default AppIcon;
