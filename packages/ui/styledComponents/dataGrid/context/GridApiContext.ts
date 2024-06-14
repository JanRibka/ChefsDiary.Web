import { createContext } from "react";

export const GridApiContext = createContext<unknown>(undefined);

if (process.env.NODE_ENV !== "production") {
  GridApiContext.displayName = "GridApiContext";
}
