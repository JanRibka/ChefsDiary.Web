const validateConfirmPassword = (password: string, confirmPassword: string) => {
  let result: boolean = true;

  if (password && confirmPassword) {
    result = password === confirmPassword;
  }

  return result;
};

export default validateConfirmPassword;
