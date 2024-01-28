import "@reduxjs/toolkit/dist/query/react/buildHooks";
import "../../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";

import { mainBaseApi } from "../mainBaseApi";
import { REGISTER } from "./endpoints";

//import type { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

const authApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (params: {
        userName: string;
        password: string;
        confirmPassword: string;
      }) => ({
        url: `${import.meta.env.VITE_API_BASE_URL}/${REGISTER}`,
        method: "POST",
        body: { params },
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
