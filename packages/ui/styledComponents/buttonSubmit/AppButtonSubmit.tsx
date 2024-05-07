import { useFormStatus } from "react-dom";

import AppButton from "../button/AppButton";
import AppButtonSubmitProps from "./AppButtonSubmitProps";

const AppButtonSubmit = (props: AppButtonSubmitProps) => {
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

export default AppButtonSubmit;
