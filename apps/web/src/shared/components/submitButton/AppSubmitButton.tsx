import { useFormStatus } from "react-dom";

import { SubmitButtonProps } from "@repo/shared/interfaces";

import AppButton from "../../styledComponents/button/AppButton";

const AppSubmitButton = (props: SubmitButtonProps) => {
  // Props
  const { disableLoadingState, ...restProps } = props;

  // Constants
  const data = useFormStatus();
  const isLoading = data.pending;

  return (
    <AppButton
      className="submit-button"
      disabled={isLoading}
      loading={!disableLoadingState && isLoading}
      {...restProps}
    />
  );
};

export default AppSubmitButton;
