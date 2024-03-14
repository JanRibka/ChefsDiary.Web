import { createApi } from "@reduxjs/toolkit/query/react";

// import { appFetch } from "@repo/shared/scripts";
import ApiTags, { ApiTagsType } from "./apiTags";
import baseQueryWithReauth from "./baseQuery/baseQueryWithReauth";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: Object.keys(ApiTags) as ApiTagsType[],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
