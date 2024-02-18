export type RouteProperty =
  | "Home"
  | "Register"
  | "Login"
  | "PasswordReset"
  | "Recipes"
  | "TipsAndTricks"
  | "Wordbook"
  | "Substitutes";
export type RouteValue =
  | "/"
  | "/registrovat"
  | "/prihlasit"
  | "/reset-hesla"
  | "/recepty"
  | "/tipy-triky"
  | "/slovnik"
  | "/nahrady-potravin";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/",
  Register: "/registrovat",
  Login: "/prihlasit",
  PasswordReset: "/reset-hesla",
  Recipes: "/recepty",
  TipsAndTricks: "/tipy-triky",
  Wordbook: "/slovnik",
  Substitutes: "/nahrady-potravin",
};
