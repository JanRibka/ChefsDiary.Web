import { useState } from "react";

import { SerializedError } from "@reduxjs/toolkit";
import { getErrorTextByKey } from "@repo/shared/errorLibrary";
import { capitalizeFirstLetter } from "@repo/shared/helpers";
import { LoginErrorType, ResponseType } from "@repo/shared/types";

import { useRegisterMutation } from "../../auth/authApi";

const useRegister = () => {
  // Api
  const [register, response] = useRegisterMutation();

  // State
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string>("");

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
        setErrorMessage("Registrace skončila chybou, zkuste to prosím znovu");

        return;
      }
      if (typeof error == "string") {
        console.error(error);
        setErrorMessage("Registrace skončila chybou, zkuste to prosím znovu");

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
  // TODO: Dopdat funkci
  // Validate form data
  // const validateFormData = (data: FormData) => {
  //   const { login, email, password, confirmPassword } = data;
  //   let isValid = true;

  //   // Validate login
  //   if (!login) {
  //     setLoginErrorMessage("Login is required");
  //     isValid = false;
  //   } else {
  //     setLoginErrorMessage("");
  //   }

  //   // Validate email
  //   if (!email) {
  //     setEmailErrorMessage("Email is required");
  //     isValid = false;
  //   } else {
  //     setEmailErrorMessage("");
  //   }

  //   // Validate password
  //   if (!password) {
  //     setPasswordErrorMessage("Password is required");
  //     isValid = false;
  //   } else {
  //     setPasswordErrorMessage("");
  //   }

  //   // Validate confirm password
  //   if (!confirmPassword) {
  //     setConfirmPasswordErrorMessage("Confirm Password is required");
  //     isValid = false;
  //   } else if (password !== confirmPassword) {
  //     setConfirmPasswordErrorMessage("Passwords do not match");
  //     isValid = false;
  //   } else {
  //     setConfirmPasswordErrorMessage("");
  //   }

  //   return isValid;
  // };

  // Update registerUser function
  const registerUser = async (data: FormData) => {
    if (validateFormData(data)) {
      const registerResponse = await register(data);
      return handleResponse(registerResponse);
    }
    return false;
  };

  return {
    registerUser,
    isLoading,
    errorMessage,
    setErrorMessage,
    loginErrorMessage,
    setLoginErrorMessage,
    emailErrorMessage,
    setEmailErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
    confirmPasswordErrorMessage,
    setConfirmPasswordErrorMessage,
  };
};

export default useRegister;
