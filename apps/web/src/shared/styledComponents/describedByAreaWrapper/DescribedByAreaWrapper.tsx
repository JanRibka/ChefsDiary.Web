import { mergeStyles } from "@repo/shared/helpers";

import DescribedByAreaWrapperProps from "./DescribedByAreaWrapperProps";

const DescribedByAreaWrapper = (props: DescribedByAreaWrapperProps) => {
  // Props
  const { children, className, ...restProps } = props;

  return (
    <div className={mergeStyles("", className)} {...restProps}>
      {children}
    </div>
  );
};

export default DescribedByAreaWrapper;
