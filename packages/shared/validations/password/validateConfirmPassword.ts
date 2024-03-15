const validateConfirmPassword = (password: string, confirmPassword: string) => {
  let result: boolean = false;

  if (password && confirmPassword) {
    result = password === confirmPassword;
  }

  return result;
};

export default validateConfirmPassword;
