import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const transformErrorResponse = (response: FetchBaseQueryError) => {
  if (typeof response.status === "string") {
    console.error(response.status, response.error);

    return;
  }

  return response.data;
};

export default transformErrorResponse;
