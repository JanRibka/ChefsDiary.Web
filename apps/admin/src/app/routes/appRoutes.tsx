export type RouteProperty =
  | "Home"
  | "Users"
  | "Login"
  | "PasswordReset"
  | "NotFound"
  | "Unauthorized";
export type RouteValue =
  | "/admin"
  | "/admin/uzivatele"
  | "/admin/prihlasit"
  | "/admin/reset-hesla"
  | "/admin/*"
  | "/admin/neautorizovan";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/admin",
  Users: "/admin/uzivatele",
  Login: "/admin/prihlasit",
  PasswordReset: "/admin/reset-hesla",
  NotFound: "/admin/*",
  Unauthorized: "/admin/neautorizovan",
};
