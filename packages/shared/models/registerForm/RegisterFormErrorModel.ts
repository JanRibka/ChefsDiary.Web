class RegisterFormErrorModel {
  main: string = "";
  login: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  public constructor(init?: Partial<RegisterFormErrorModel>) {
    Object.assign(this, init);
  }
}

export default RegisterFormErrorModel;
