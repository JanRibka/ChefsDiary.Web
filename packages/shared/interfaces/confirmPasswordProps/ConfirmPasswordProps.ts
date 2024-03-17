import { Dispatch, SetStateAction } from "react";

import { RegisterFormModel } from "../../models";

interface ConfirmPasswordProps {
  password: string;
  setFormData: Dispatch<SetStateAction<RegisterFormModel>>;
  passwordErrorMessage: string;
  confirmPassword: string;
  confirmPasswordErrorMessage: string;
}

export default ConfirmPasswordProps;
