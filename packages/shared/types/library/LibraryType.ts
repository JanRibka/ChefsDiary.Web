type LibraryTypeProperty =
  | "loginRequired"
  | "loginMinLength"
  | "loginMaxLength"
  | "loginStartWithLetter"
  | "loginAllowedCharacters"
  | "emailRequired"
  | "passwordRequired"
  | "passwordMinLength"
  | "passwordMaxLength"
  | "passwordLoweCase"
  | "passwordUpperCase"
  | "passwordNumbers"
  | "confirmPasswordRequired"
  | "confirmPasswordOneOf"
  | "incorrectLoginPassword"
  | "accessDenied";

type LibraryType = Record<LibraryTypeProperty, string>;

export default LibraryType;
