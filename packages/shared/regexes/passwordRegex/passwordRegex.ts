import {
  LOWERCASE_REGEX,
  minMaxLengthRegex,
  NUMBERS_REGEX,
  UPPERCASE_REGEX,
} from "../";

export const PASSWORD_REGEX = new RegExp(
  `^(?=.*${LOWERCASE_REGEX})(?=.*${UPPERCASE_REGEX})(?=.*${NUMBERS_REGEX}).${minMaxLengthRegex(
    8,
    24
  )}`
);
