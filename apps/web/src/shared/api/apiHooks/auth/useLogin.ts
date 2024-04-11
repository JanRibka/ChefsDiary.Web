import { useState } from "react";

import { SerializedError } from "@reduxjs/toolkit/react";
import { getErrorTextByKey } from "@repo/shared/errorLibrary";
import { LoginFormErrorModel } from "@repo/shared/models";
import { LibraryType, LoginErrorType, ResponseType } from "@repo/shared/types";

import Login from "../../../../entities/auth/Login";
import { useLoginMutation } from "../../auth/authApi";

const useLogin = () => {
  // Api
  const [login, response] = useLoginMutation();

  // State
  const [errors, setErrors] = useState<LoginFormErrorModel>(
    new LoginFormErrorModel()
  );

  // Constants
  const isLoading = response.isLoading;

  // Login user
  const loginUser = async (data: FormData) => {
    // TODO: Ibalit to do try catch .unwrap()
    const loginResponse = await login(data);

    return handleResponse(loginResponse);
  };

  const handleResponse = (response: ResponseType<Login>) => {
    const error = response?.error;

    if (error) {
      const message = (error as SerializedError)?.message;

      if (typeof error === "object" && !!message) {
        console.error(message);
        setErrors((prev) => ({
          ...prev,
          main: getErrorTextByKey("loginUserMainError"),
        }));

        return;
      }
      if (typeof error == "string") {
        console.error(error);
        setErrors((prev) => ({
          ...prev,
          main: getErrorTextByKey("loginUserMainError"),
        }));

        return;
      }

      const errors: LoginFormErrorModel = new LoginFormErrorModel();
      const keys = Object.keys(error);

      keys.forEach((item) => {
        let key = item as keyof LoginFormErrorModel;
        const values = (
          (error as LoginErrorType)?.[key][0] as keyof LibraryType
        ).split("|") as (keyof LibraryType)[];

        key = errors[key] !== undefined ? key : "main";

        if (errors[key] === "") {
          errors[key] = getErrorTextByKey(values[0], values[1] || undefined);
        }
      });

      setErrors(errors);

      return false;
    } else {
      setErrors(new LoginFormErrorModel());
    }

    return response.data;
  };

  return {
    loginUser,
    isLoading,
    errors,
    setErrors,
  };
};

export default useLogin;
