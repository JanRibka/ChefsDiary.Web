import { transformErrorResponse } from "@repo/shared/apiResponse";

import { mainBaseApi } from "../mainBaseApi";
import { LOGIN, REGISTER } from "./endpoints";

export const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (params: {
        userName: string;
        password: string;
        confirmPassword: string;
      }) => ({
        url: `/${REGISTER}`,
        method: "POST",
        body: { params },
      }),
      transformErrorResponse: transformErrorResponse,
    }),

    login: build.mutation<string, FormData>({
      query: (loginFormData: FormData) => ({
        url: `/${LOGIN}`,
        method: "POST",
        body: loginFormData,
      }),
      transformErrorResponse: transformErrorResponse,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
