import { PASSWORD_REGEX } from '../../regexes';

const validatePassword = (password: string) => {
  return PASSWORD_REGEX.test(password);
};

export default validatePassword;
