class LoginFormErrorModel {
  main: string = "";
  login: string = "";
  password: string = "";

  public constructor(init?: Partial<LoginFormErrorModel>) {
    Object.assign(this, init);
  }
}

export default LoginFormErrorModel;
