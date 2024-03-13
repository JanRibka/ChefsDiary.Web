import { useState } from "react";

import { SerializedError } from "@reduxjs/toolkit/react";
import { getErrorTextByKey } from "@repo/shared/errorLibrary";
import { capitalizeFirstLetter } from "@repo/shared/helpers";
import { LoginErrorType, ResponseType } from "@repo/shared/types";

import Login from "../../../../entities/auth/Login";
import { useLoginMutation } from "../../auth/authApi";

const useLogin = () => {
  // Api
  const [login, response] = useLoginMutation();

  // State
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  // Constants
  const isLoading = response.isLoading;

  // Login user
  const loginUser = async (data: FormData) => {
    const loginResponse = await login(data);

    return handleResponse(loginResponse);
  };

  const handleResponse = (response: ResponseType<Login>) => {
    const error = response?.error;

    if (error) {
      const message = (error as SerializedError)?.message;

      if (typeof error === "object" && !!message) {
        console.error(message);
        setErrorMessage("Přihlášení skončilo chybou, zkuste to prosím znovu");

        return;
      }
      if (typeof error == "string") {
        console.error(error);
        setErrorMessage("Přihlášení skončilo chybou, zkuste to prosím znovu");

        return;
      }

      const keys = Object.keys(error);

      keys.forEach((item) => {
        let errorText = (error as LoginErrorType)?.[item][0];

        if (item === "unauthorized" || item === "forbidden") item = "";

        errorText = getErrorTextByKey(errorText);
        eval(`set${capitalizeFirstLetter(item)}ErrorMessage("${errorText}")`);
      });

      return;
    } else {
      setErrorMessage("");
      setLoginErrorMessage("");
      setPasswordErrorMessage("");
    }

    return response.data;
  };

  return {
    loginUser,
    isLoading,
    errorMessage,
    setErrorMessage,
    loginErrorMessage,
    setLoginErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
  };
};

export default useLogin;
