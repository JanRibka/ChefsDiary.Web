import { HTMLInputTypeAttribute } from "react";

import { RadiusType } from "../../types";
import InputBaseVariantType from "../../types/inputBase/InputBaseVariantType";
import BaseProps from "../baseProps/BaseProps";

interface FieldBaseProps extends BaseProps {
  value?: string | number | null;
  name: string;
  disable?: boolean;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  radius?: RadiusType;
  variant?: InputBaseVariantType;
  required?: boolean;
  error?: boolean;
}

export default FieldBaseProps;
