import { Oval } from "react-loader-spinner";

import { AppButtonProps } from "@repo/shared/interfaces";

import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";

const AppButton = (props: AppButtonProps) => {
  // Props
  const { children, startIcon, endIcon, disabled, loading, ...restProps } =
    props;

  // Icons
  let buttonChildren: JSX.Element | string = children;

  if (startIcon || endIcon || loading) {
    buttonChildren = (
      <span className="flex items-center gap-2">
        {loading && <LoadingSpinner />}
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </span>
    );
  }

  return (
    <ButtonBase disabled={disabled || loading} {...restProps}>
      {buttonChildren}
    </ButtonBase>
  );
};

const LoadingSpinner = () => {
  return (
    <Oval
      strokeWidth={5}
      wrapperClass="[&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-componentText-light [&>svg>g>g>circle]:stroke-componentText-light"
    />
  );
};

export default AppButton;
