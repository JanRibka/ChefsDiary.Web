import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import ApiTags, { ApiTagsType } from "./apiTags";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: Object.keys(ApiTags) as ApiTagsType[],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    responseHandler: (response: Response) => {
      return response.text();
    },
  }),

  endpoints: () => ({}),
});
