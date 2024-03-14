import { mergeStyles } from "@repo/shared/helpers";
import { DescribedByAreaProps } from "@repo/shared/interfaces";

const DescribedByArea = (props: DescribedByAreaProps) => {
  // Props
  const { display, className, ...restProps } = props;

  if (!display) return;

  return <div className={mergeStyles("", className)} {...restProps} />;
};

export default DescribedByArea;
