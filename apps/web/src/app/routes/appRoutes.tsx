export type RouteProperty =
  | "Home"
  | "Register"
  | "Login"
  | "PasswordReset"
  | "Recipes"
  | "Recipe"
  | "TipsAndTricks"
  | "Wordbook"
  | "Substitutes"
  | "NotFound";
export type RouteValue =
  | "/"
  | "/registrovat"
  | "/prihlasit"
  | "/reset-hesla"
  | "/recepty"
  | "/recept/:id"
  | "/tipy-triky"
  | "/slovnik"
  | "/nahrady-potravin"
  | "*";

export const AppRoutes: Record<RouteProperty, RouteValue> = {
  Home: "/",
  Register: "/registrovat",
  Login: "/prihlasit",
  PasswordReset: "/reset-hesla",
  Recipes: "/recepty",
  Recipe: "/recept/:id",
  TipsAndTricks: "/tipy-triky",
  Wordbook: "/slovnik",
  Substitutes: "/nahrady-potravin",
  NotFound: "*",
};
