import { Dispatch, SetStateAction } from "react";

import { RegisterFormErrorModel, RegisterFormModel } from "../../models";

interface ConfirmPasswordProps {
  password: string;
  confirmPassword: string;
  errors: RegisterFormErrorModel;
  setFormData: Dispatch<SetStateAction<RegisterFormModel>>;
  resetError: (name: keyof RegisterFormErrorModel) => void;
}

export default ConfirmPasswordProps;
