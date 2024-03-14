import { Dispatch, SetStateAction } from "react";

interface ConfirmPasswordProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordErrorMessage: string;
  passwordAriaDescribedByContent: JSX.Element;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  confirmPasswordErrorMessage: string;
  confirmPasswordAriaDescribedByContent: JSX.Element;
}

export default ConfirmPasswordProps;
