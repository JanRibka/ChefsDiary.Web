export type RouteProperty = "Home" | "Register" | "Login";
export type RouteValue = "/" | "/registrovat" | "/prihlasit";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/",
  Register: "/registrovat",
  Login: "/prihlasit",
};
