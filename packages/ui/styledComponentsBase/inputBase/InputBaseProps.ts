import { ChangeEvent, FocusEvent } from "react";

import FieldBaseProps from "../../shared/props/field/FieldBaseProps";
import InputSizeType from "../../shared/types/input/InputSizeType";

interface InputBaseProps extends FieldBaseProps {
  size?: InputSizeType;
  endIcon?: JSX.Element;
  buttonAriaLabel?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  endIconOnClick?: () => void;
}

export default InputBaseProps;
