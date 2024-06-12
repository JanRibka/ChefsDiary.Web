import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";
import AppButtonIconProps from "./AppButtonIconProps";

const AppButton = (
  props: Omit<AppButtonIconProps, "variant" | "radius" | "size">
) => {
  // Props
  const { children, disabled, ...restProps } = props;

  return (
    <ButtonBase disabled={disabled} variant="icon" radius="full" {...restProps}>
      {children}
    </ButtonBase>
  );
};

export default AppButton;
