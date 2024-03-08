import { ComponentVariantType } from "../../types";
import ButtonSizeType from "../../types/button/ButtonSizeType";
import BaseProps from "../baseProps/BaseProps";

interface ButtonBaseProps extends BaseProps {
  variant?: ComponentVariantType;
  size?: ButtonSizeType;
  disabled?: boolean;
  children: JSX.Element | string;
}

export default ButtonBaseProps;
