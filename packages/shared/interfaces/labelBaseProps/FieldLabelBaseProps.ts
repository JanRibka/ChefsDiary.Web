import { InputBaseSizeType, InputBaseVariantType } from "../../types";
import LabelBaseProps from "./LabelBaseProps";

interface FieldLabelBaseProps extends LabelBaseProps {
  size?: InputBaseSizeType;
  variant?: InputBaseVariantType;
  required?: boolean;
  error?: boolean;
}

export default FieldLabelBaseProps;
