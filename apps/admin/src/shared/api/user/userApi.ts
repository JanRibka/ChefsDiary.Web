import { transformErrorResponse } from "@repo/shared/apiResponse";
import { PaginatedData } from "@repo/shared/entities";

import User from "../../../entities/user/User";
import { mainBaseApi } from "../mainBaseApi";
import { GET_ALL, GET_USER_FOR_EDIT } from "./endpoints";

export const userApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<PaginatedData<User>, void>({
      query: () => ({
        url: `/${GET_ALL}`,
        method: "GET",
      }),
      transformErrorResponse: transformErrorResponse,
    }),

    getUserForEdit: build.query<User, string>({
      query: (uuid) => ({
        url: `/${GET_USER_FOR_EDIT}`,
        method: "GET",
        params: { uuid: uuid },
      }),
      transformErrorResponse: transformErrorResponse,
    }),
  }),
});

export const { useGetAllQuery } = userApi;
