class RegisterFormModel {
  login: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  termsAgreement: boolean = false;

  public constructor(init?: Partial<RegisterFormModel>) {
    Object.assign(this, init);
  }
}

export default RegisterFormModel;
