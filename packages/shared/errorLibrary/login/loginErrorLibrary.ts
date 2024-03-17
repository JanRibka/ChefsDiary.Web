import { stringFormat } from "../../helpers";
import { LibraryType } from "../../types";

const errorTexts: LibraryType = {
  loginRequired: "Uživatelské jméno je povinné",
  loginMinLength: "Uživatelské jméno musí mít alespoň {0} znaků",
  loginMaxLength: "Uživatelské jméno může mít maximálně {0} znaků",
  loginStartWithLetter: "Uživatelské jméno musí začínat písmenem",
  loginAllowedCharacters:
    "Uživatelské jméno může obsahovat pouze písmena, čísla, pomlčku a podtržítko",
  emailRequired: "Email je povinný",
  emailInvalid: "Email není platná emailová adresa",
  passwordRequired: "Heslo je povinné",
  passwordMinLength: "Heslo musí mít alespoň {0} znaků",
  passwordMaxLength: "Heslo může mít maximálně {0} znaků",
  passwordLoweCase: "Heslo musí obsahovat alespoň jedno malé písmeno",
  passwordUpperCase: "Heslo musí obsahovat alespoň jedno velké písmeno",
  passwordNumbers: "Heslo musí obsahovat alespoň jednu číslici",
  confirmPasswordRequired: "Heslo pro potvrzení je povinné",
  confirmPasswordOneOf: "Hesla se neshodují",
  incorrectLoginPassword: "Neplatné uživatelské jméno, nebo heslo",
  accessDenied: "Byl vám odepřen přístup",
};

const getErrorTextByKey = (key: keyof LibraryType, ...args: string[]) => {
  if (args.length > 0) {
    return stringFormat(errorTexts?.[key as keyof LibraryType], ...args);
  }

  return errorTexts?.[key as keyof LibraryType] ?? key;
};

export default getErrorTextByKey;
