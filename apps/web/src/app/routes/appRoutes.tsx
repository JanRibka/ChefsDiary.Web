export type RouteProperty = "Home" | "Register" | "Login" | "PasswordReset";
export type RouteValue = "/" | "/registrovat" | "/prihlasit" | "/reset-hesla";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/",
  Register: "/registrovat",
  Login: "/prihlasit",
  PasswordReset: "/reset-hesla",
};
