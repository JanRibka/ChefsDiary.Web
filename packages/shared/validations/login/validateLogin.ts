import { LOGIN_REGEX } from "../../regexes";

const validateLogin = (login: string) => {
  return LOGIN_REGEX.test(login);
};

export default validateLogin;
