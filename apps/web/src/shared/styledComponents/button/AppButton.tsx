import { AppButtonProps } from "@repo/shared/interfaces";

import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";

const AppButton = (props: AppButtonProps) => {
  // Props
  const { children, startIcon, endIcon, ...restProps } = props;

  // Icons
  let buttonChildren: JSX.Element | string = children;

  if (startIcon || endIcon) {
    buttonChildren = (
      <span className="flex items-center gap-2">
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </span>
    );
  }

  return <ButtonBase {...restProps}>{buttonChildren}</ButtonBase>;
};

export default AppButton;
