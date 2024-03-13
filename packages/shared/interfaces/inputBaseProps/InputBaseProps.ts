import { ChangeEvent, FocusEvent } from "react";

import { InputSizeType } from "../../types";
import FieldBaseProps from "../fieldBaseProps/FieldBaseProps";

interface InputBaseProps extends FieldBaseProps {
  size?: InputSizeType;
  endIcon?: JSX.Element;
  buttonAriaLable?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  endIconOnClick?: () => void;
}

export default InputBaseProps;
