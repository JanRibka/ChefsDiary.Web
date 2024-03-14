import {
  customCharRegex,
  LOWER_UPPERCASE_NUMBERS_REGEX,
  LOWER_UPPERCASE_REGEX,
  LOWERCASE_REGEX,
  NUMBERS_REGEX,
  SPECIAL_CHARACTERS_REGEX,
  UPPERCASE_REGEX,
} from "../../regexes";
import { minMaxLengthRegex } from "../../regexes/common/commonRegexes";

export const validateLowerCase = (text: string) => {
  return new RegExp(LOWERCASE_REGEX).test(text);
};

export const validateLowerUpperCase = (text: string) => {
  return new RegExp(LOWER_UPPERCASE_REGEX).test(text);
};

export const validateLowerUpperCaseNumbers = (text: string) => {
  return new RegExp(LOWER_UPPERCASE_NUMBERS_REGEX).test(text);
};

export const validateUpperCase = (text: string) => {
  return new RegExp(UPPERCASE_REGEX).test(text);
};

export const validateNumbers = (text: string) => {
  return new RegExp(NUMBERS_REGEX).test(text);
};

export const validateCustomChar = (text: string, customChar: string) => {
  return new RegExp(customCharRegex(customChar)).test(text);
};

export const validateSpecialCharacters = (text: string) => {
  return new RegExp(SPECIAL_CHARACTERS_REGEX).test(text);
};

export const validateMinMaxLength = (
  text: string,
  min: number,
  max?: number
) => {
  return new RegExp(`^.${minMaxLengthRegex(min, max)}$`).test(text);
};
