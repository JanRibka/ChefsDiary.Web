import ButtonBase from "../../styledComponentsBase/buttonBase/ButtonBase";
import AppButtonIconProps from "./AppButtonIconProps";

const AppButtonIcon = (
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

export default AppButtonIcon;
