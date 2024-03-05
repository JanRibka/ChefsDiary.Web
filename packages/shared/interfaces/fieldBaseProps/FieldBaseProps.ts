import InputBaseVariantType from "../../types/inputBase/InputBaseVariantType";

interface FieldCommonBaseProps {
  variant?: InputBaseVariantType;
  required?: boolean;
  error?: boolean;
  className?: string;
}

export default FieldCommonBaseProps;
