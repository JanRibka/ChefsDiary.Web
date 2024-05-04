export type RouteProperty =
  | "Home"
  | "Login"
  | "PasswordReset"
  | "NotFound"
  | "Unauthorized";
export type RouteValue =
  | "/admin"
  | "/admin/prihlasit"
  | "/admin/reset-hesla"
  | "/admin/*"
  | "/admin/neautorizovan";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/admin",
  Login: "/admin/prihlasit",
  PasswordReset: "/admin/reset-hesla",
  NotFound: "/admin/*",
  Unauthorized: "/admin/neautorizovan",
};
