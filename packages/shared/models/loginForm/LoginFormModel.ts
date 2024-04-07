class LoginFormModel {
  login: string = "";
  password: string = "";
  persistLogin: boolean = false;

  public constructor(init?: Partial<LoginFormModel>) {
    Object.assign(this, init);
  }
}

export default LoginFormModel;
