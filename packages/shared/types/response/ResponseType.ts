import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type ResponseType<T> = {
  data?: T;
  error?: FetchBaseQueryError | SerializedError;
};

export default ResponseType;
