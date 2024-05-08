import { Dispatch, SetStateAction } from "react";

import { RegisterFormErrorModel, RegisterFormModel } from "@repo/shared/models";

interface AppConfirmPasswordProps {
  password: string;
  confirmPassword: string;
  errors: RegisterFormErrorModel;
  setFormData: Dispatch<SetStateAction<RegisterFormModel>>;
  resetError: (name: keyof RegisterFormErrorModel) => void;
}

export default AppConfirmPasswordProps;
