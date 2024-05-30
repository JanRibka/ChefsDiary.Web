interface User {
  uuid: string;
  login: string;
  isDisabled: boolean;
  email: string;
  createdAt: Date;
}

export default User;
