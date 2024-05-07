import { BaseProps } from "@repo/shared/props";

interface LabelBaseProps extends BaseProps {
  label: string;
  htmlFor: string;
  required?: boolean;
}

export default LabelBaseProps;
