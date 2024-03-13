import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { appFetch } from "@repo/shared/scripts";
import { RootState } from "../../app/store/store";
import ApiTags, { ApiTagsType } from "./apiTags";

export const reducerPath = "mainBaseApi";

export const mainBaseApi = createApi({
  reducerPath: reducerPath,
  tagTypes: Object.keys(ApiTags) as ApiTagsType[],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers: Headers, { getState }) => {
      const authorizationHeader = headers.get("Authorization");
      const authState = (getState() as RootState).auth;

      if (!authorizationHeader && authState.accessToken) {
        headers.set("Authorization", `Barrier ${authState.accessToken}`);
      }

      return headers;
    },
    // responseHandler: async (response: Response) => {
    //   if (response.status === StatusCodes.FORBIDDEN) {
    //     // const x = appFetch("");
    //   }
    //   debugger;
    //   return response.text();
    // },
  }),

  endpoints: () => ({}),
});
