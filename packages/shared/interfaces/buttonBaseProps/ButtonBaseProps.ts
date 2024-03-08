import { ComponentVariantType } from "../../types";
import ButtonSizeType from "../../types/button/ButtonSizeType";
import BaseProps from "../baseProps/BaseProps";

interface ButtonBaseProps extends BaseProps {
  label: string;
  variant?: ComponentVariantType;
  size?: ButtonSizeType;
  disabled?: boolean;
}

export default ButtonBaseProps;
