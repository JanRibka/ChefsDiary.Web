import { ReactNode } from "react";

import { BaseProps } from "@repo/shared/props";

import ButtonSizeType from "../../shared/types/button/ButtonSizeType";
import ButtonVariantType from "../../shared/types/button/ButtonVariantType";
import RadiusType from "../../shared/types/radius/RadiusType";

interface ButtonBaseProps extends BaseProps {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  radius?: RadiusType;
  disabled?: boolean;
  children: ReactNode | string;
}

export default ButtonBaseProps;
