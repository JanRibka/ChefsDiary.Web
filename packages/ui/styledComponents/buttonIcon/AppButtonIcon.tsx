import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";
import AppButtonIconProps from "./AppButtonIconProps";

const AppButton = (props: AppButtonIconProps) => {
  // Props
  const { children, disabled, ...restProps } = props;

  return (
    <ButtonBase disabled={disabled} {...restProps}>
      {children}
    </ButtonBase>
  );
};

export default AppButton;
