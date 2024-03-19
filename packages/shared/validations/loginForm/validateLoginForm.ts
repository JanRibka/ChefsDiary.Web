import { ValidationError } from "yup";

import { LoginFormErrorModel, LoginFormModel } from "../../models";
import loginFormValidationSchema from "../schemas/loginForm/loginFormValidationSchema";

const validateLoginForm = async (formData: LoginFormModel) => {
  const errors: LoginFormErrorModel = new LoginFormErrorModel();

  try {
    await loginFormValidationSchema.validate(formData, {
      abortEarly: false,
    });
  } catch (error) {
    (error as ValidationError).inner.forEach((err: ValidationError) => {
      const path = err.path as keyof LoginFormErrorModel;

      if (errors[path] === "") {
        errors[path] = err.message;
      }
    });
  }

  return errors;
};

export default validateLoginForm;
