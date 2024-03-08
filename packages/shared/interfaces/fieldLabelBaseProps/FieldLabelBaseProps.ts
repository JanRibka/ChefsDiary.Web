import { ComponentVariantType, InputSizeType } from "../../types";
import LabelBaseProps from "../labelBaseProps/LabelBaseProps";

interface FieldLabelBaseProps extends LabelBaseProps {
  size?: InputSizeType;
  variant?: ComponentVariantType;
  required?: boolean;
  error?: boolean;
}

export default FieldLabelBaseProps;
