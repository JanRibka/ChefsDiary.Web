import { LibraryType } from "../../types";

const errorTexts: LibraryType = {
  loginRequired: "Uživatelské jméno je povinné",
  passwordRequired: "Heslo je povinné",
  incorrectLoginPassword: "Neplatné uživatelské jméno, nebo heslo",
  accessDenied: "Byl vám odepřen přístup",
};

const getErrorTextByKey = (key: string) => {
  return errorTexts?.[key] ?? key;
};

export default getErrorTextByKey;
