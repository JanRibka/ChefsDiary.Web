import { mergeStyles } from "@repo/shared/helpers";
import { AppFormProps } from "@repo/shared/props";

const AppForm = (props: AppFormProps) => {
  // Props
  const { handleAction, children, className, ...restProps } = props;

  return (
    <form
      action={handleAction}
      className={mergeStyles("w-full", className)}
      noValidate
      {...restProps}
    >
      {children}
    </form>
  );
};

export default AppForm;
