import { AppButtonProps } from "@repo/shared/interfaces";

import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";

const AppButton = (props: AppButtonProps) => {
  // Props
  const { children, startIcon, endIcon, ...restProps } = props;

  // Icons
  let buttonChildren: JSX.Element = <span>{children}</span>;

  if (startIcon) {
    buttonChildren = (
      <span>
        {
          <>
            <>{startIcon}</> <>{children}</>
          </>
        }
      </span>
    );
  }

  if (endIcon) {
    buttonChildren = (
      <span>
        {
          <>
            <>{endIcon}</> <>{children}</>
          </>
        }
      </span>
    );
  }

  return <ButtonBase {...restProps}>{buttonChildren}</ButtonBase>;
};

export default AppButton;
