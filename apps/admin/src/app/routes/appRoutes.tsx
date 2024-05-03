export type RouteProperty =
  | "Home"
  | "Login"
  | "PasswordReset"
  | "NotFound"
  | "Unauthorized";
export type RouteValue =
  | "/"
  | "/prihlasit"
  | "/reset-hesla"
  | "*"
  | "/neautorizovan";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/",
  Login: "/prihlasit",
  PasswordReset: "/reset-hesla",
  NotFound: "*",
  Unauthorized: "/neautorizovan",
};
