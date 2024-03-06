import { ChangeEvent, FocusEvent } from "react";

import { InputBaseSizeType } from "../../types";
import FieldBaseProps from "./FieldBaseProps";

interface InputBaseProps extends FieldBaseProps {
  size?: InputBaseSizeType;
  endIcon?: JSX.Element;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  endIconOnClick?: () => void;
}

export default InputBaseProps;
