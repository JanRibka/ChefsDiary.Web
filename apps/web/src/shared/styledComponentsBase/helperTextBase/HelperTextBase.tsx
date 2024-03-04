import { FieldBaseProps } from "@repo/shared/interfaces";

export interface HelperTextBaseProps extends FieldBaseProps {
  helperText?: string;
}

const HelperTextBase = (props: HelperTextBaseProps) => {
  if (!props.helperText) return undefined;

  const colorClassName: string = props.error ? " text-error" : " text-gray-700";

  return <p className={"text-xs mt-1" + colorClassName}>{props.helperText}</p>;
};

export default HelperTextBase;
