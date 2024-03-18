import { useState } from "react";

import { SerializedError } from "@reduxjs/toolkit";
import { getErrorTextByKey } from "@repo/shared/errorLibrary";
import { RegisterFormErrorModel } from "@repo/shared/models";
import { LibraryType, LoginErrorType, ResponseType } from "@repo/shared/types";

import { useRegisterMutation } from "../../auth/authApi";

const useRegister = () => {
  // Api
  const [register, response] = useRegisterMutation();

  // State
  const [errors, setErrors] = useState<RegisterFormErrorModel>(
    new RegisterFormErrorModel()
  );

  // Constants
  const isLoading = response.isLoading;

  // Register user
  const registerUser = async (data: FormData) => {
    const registerResponse = await register(data);

    return handleResponse(registerResponse);
  };

  const handleResponse = (response: ResponseType<string>) => {
    const error = response?.error;

    if (error) {
      const message = (error as SerializedError)?.message;

      if (typeof error === "object" && !!message) {
        console.error(message);
        setErrors((prev) => ({
          ...prev,
          main: getErrorTextByKey("registerUserMainError"),
        }));

        return;
      }
      if (typeof error == "string") {
        console.error(error);
        setErrors((prev) => ({
          ...prev,
          main: getErrorTextByKey("registerUserMainError"),
        }));

        return;
      }

      const errors: RegisterFormErrorModel = new RegisterFormErrorModel();
      const keys = Object.keys(error);

      keys.forEach((item) => {
        const key = item as keyof RegisterFormErrorModel;
        const values = (
          (error as LoginErrorType)?.[key][0] as keyof LibraryType
        ).split("|") as (keyof LibraryType)[];

        if (errors[key] === "") {
          errors[key] = getErrorTextByKey(values[0], values[1] || undefined);
        }
      });

      setErrors(errors);

      return false;
    } else {
      setErrors(new RegisterFormErrorModel());

      return true;
    }
  };

  return {
    registerUser,
    isLoading,
    errors,
    setErrors,
  };
};

export default useRegister;
