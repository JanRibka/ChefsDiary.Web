import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../../app/store/store";
import ApiTags, { ApiTagsType } from "./apiTags";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: Object.keys(ApiTags) as ApiTagsType[],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const authorizationHeader = headers.get("Authorization");

      if (!authorizationHeader) {
        const authState = (getState() as RootState).auth;
        headers.set("Authorization", `Barrier ${authState.accessToken}`);
      }

      return headers;
    },
    responseHandler: (response: Response) => {
      return response.text();
    },
  }),

  endpoints: () => ({}),
});
