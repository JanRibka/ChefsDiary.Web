import { HTMLInputTypeAttribute } from "react";

import { RadiusType } from "../../types";
import InputBaseVariantType from "../../types/component/ComponentVariantType";
import BaseProps from "../baseProps/BaseProps";
import ComponentCommonProps from "../componentCommonProps/ComponentCommonProps";

interface FieldBaseProps extends ComponentCommonProps, BaseProps {
  value?: string | number | null;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  radius?: RadiusType;
  variant?: InputBaseVariantType;
}

export default FieldBaseProps;
