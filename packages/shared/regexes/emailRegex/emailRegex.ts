import { minMaxLengthRegex } from "../";
import {
  ALL_ALFA_NUMERIC_REGEX,
  allAlfaNumericCustomCharRegex,
} from "../common/commonRegexes";

export const EMAIL_REGEX = new RegExp(
  `^${allAlfaNumericCustomCharRegex(
    "-\\."
  )}+@(${ALL_ALFA_NUMERIC_REGEX}+\\.)+${ALL_ALFA_NUMERIC_REGEX}${minMaxLengthRegex(
    2,
    4
  )}$`
);
