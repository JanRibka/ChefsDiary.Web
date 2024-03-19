class LoginFormModel {
  login: string = "";
  password: string = "";
  stayLogged: boolean = false;

  public constructor(init?: Partial<LoginFormModel>) {
    Object.assign(this, init);
  }
}

export default LoginFormModel;
