import {
  LOWER_UPPERCASE_REGEX,
  loweUpperCaseNumberSpecialCharRegex,
  minMaxLengthRegex,
} from "../common/commonRegexes";

export const LOGIN_REGEX = new RegExp(
  `^${LOWER_UPPERCASE_REGEX}${loweUpperCaseNumberSpecialCharRegex(
    "-_"
  )}${minMaxLengthRegex(3, 23)}$`
);
