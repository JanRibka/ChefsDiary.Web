import { StatusCodes } from "http-status-codes";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useLoginMutation } from "../../auth/authApi";

const useLogin = () => {
  const [login, response] = useLoginMutation();

  const isLoading = response.isLoading;

  const loginUser = async (data: FormData) => {
    const loginResponse = await login(data);

    return evaluateResponse<string>(loginResponse);
  };

  if (response.isError) {
    // TODO: Genericka metoda pro zisk8n9 eroru. Asi byde typu key/value pair, Bude to vracet i hodnotu
  }

  //   Tento hook nem8 smysl a genericka metoda bude v Shared bude se volat po azvolan9 register

  return { loginUser, isLoading };
};

export default useLogin;

type ValidationResponseErrorType = {
  [key: string]: string[];
};

type ResponseErrorType<T> = {
  data?: T | ValidationResponseErrorType;
  error?: FetchBaseQueryError | SerializedError;
  status?: StatusCodes;
};

const evaluateResponse = <T>(
  response: ResponseErrorType<T>
): T | ValidationResponseErrorType | undefined => {
  const status = (response.error as FetchBaseQueryError).status;

  if (!!response.error && typeof status !== "string") {
    const data = (response.error as FetchBaseQueryError).data as any;

    return JSON.parse(data);
  } else if (!!response.error && typeof status === "string") {
    const status = (response.error as FetchBaseQueryError).status;

    console.log(status);

    return;
  }

  return response.data as T;
};
