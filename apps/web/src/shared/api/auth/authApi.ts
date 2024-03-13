import { transformErrorResponse } from "@repo/shared/apiResponse";

import Login from "../../../entities/auth/Login";
import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, REGISTER } from "./endpoints";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<string, FormData>({
      query: (data) => ({
        url: `/${REGISTER}`,
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
    }),

    login: build.mutation<Login, FormData>({
      query: (data: FormData) => ({
        url: `/${LOGIN}`,
        method: "POST",
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
