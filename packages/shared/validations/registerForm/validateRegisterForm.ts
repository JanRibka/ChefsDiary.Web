import { ValidationError } from "yup";

import { RegisterFormErrorModel, RegisterFormModel } from "../../models";
import RegisterFormValidationSchema from "../schemas/registerForm/RegisterFormValidationSchema";

const validateRegisterForm = async (formData: RegisterFormModel) => {
  const errors: RegisterFormErrorModel = new RegisterFormErrorModel();

  try {
    await RegisterFormValidationSchema.validate(formData, {
      abortEarly: false,
    });
  } catch (error) {
    (error as ValidationError).inner.forEach((err: ValidationError) => {
      const path = err.path as keyof RegisterFormErrorModel;

      if (errors[path] === "") {
        errors[path] = err.message;
      }
    });
  }

  return errors;
};

export default validateRegisterForm;
