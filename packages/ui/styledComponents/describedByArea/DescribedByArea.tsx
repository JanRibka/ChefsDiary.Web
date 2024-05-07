import { mergeStyles } from "@repo/shared/helpers";

import DescribedByAreaProps from "./DescribedByAreaProps";
import { describedByAreaVariants } from "./describedByAreaVariants";

const DescribedByArea = (props: Omit<DescribedByAreaProps, "children">) => {
  // Props
  const {
    ariaDescribedByDisplay,
    className,
    ariaDescribedByContent,
    ...restProps
  } = props;

  return (
    <div
      className={mergeStyles(
        describedByAreaVariants({ display: ariaDescribedByDisplay }),
        className
      )}
      {...restProps}
    >
      {ariaDescribedByContent}
    </div>
  );
};

export default DescribedByArea;
