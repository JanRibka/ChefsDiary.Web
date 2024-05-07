import { HTMLInputTypeAttribute } from "react";

import { BaseProps } from "@repo/shared/props";

import ComponentVariantType from "../../types/component/ComponentVariantType";
import RadiusType from "../../types/radius/RadiusType";
import ComponentCommonProps from "../component/ComponentCommonProps";

interface FieldBaseProps extends ComponentCommonProps, BaseProps {
  value?: string | number | null;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  radius?: RadiusType;
  variant?: ComponentVariantType;
  ariaDescribedBy?: string;
}

export default FieldBaseProps;
