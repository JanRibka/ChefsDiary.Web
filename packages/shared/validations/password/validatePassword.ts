import { PASSWORD_REGEX } from "../../regexes";

const validatePassword = (password: string) => {
  console.log(PASSWORD_REGEX);
  return PASSWORD_REGEX.test(password);
};

export default validatePassword;
