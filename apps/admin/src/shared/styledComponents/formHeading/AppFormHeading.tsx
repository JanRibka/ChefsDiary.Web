import { mergeStyles } from "@repo/shared/helpers";
import { AppFormHeadingProps } from "@repo/shared/interfaces";

const AppFormHeading = (props: AppFormHeadingProps) => {
  // Props
  const { children, className, ...restProps } = props;

  return (
    <h3 className={mergeStyles("text-3xl mb-7", className)} {...restProps}>
      {children}
    </h3>
  );
};

export default AppFormHeading;
