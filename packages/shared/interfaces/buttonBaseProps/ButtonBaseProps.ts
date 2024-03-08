import { ButtonVariantType, RadiusType } from "../../types";
import ButtonSizeType from "../../types/button/ButtonSizeType";
import BaseProps from "../baseProps/BaseProps";

interface ButtonBaseProps extends BaseProps {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  radius?: RadiusType;
  disabled?: boolean;
  children: JSX.Element | string;
}

export default ButtonBaseProps;
